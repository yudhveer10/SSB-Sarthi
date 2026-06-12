create extension if not exists pgcrypto with schema extensions;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  full_name text,
  avatar_url text,
  onboarding_completed boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.prep_plans (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null default 'My SSB preparation plan',
  target_entry text,
  target_board text,
  start_date date not null default current_date,
  reporting_date date,
  status text not null default 'active' check (status in ('active', 'paused', 'completed')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.centre_checklists (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  centre_name text not null default 'My SSB centre',
  items jsonb not null default '[]'::jsonb check (jsonb_typeof(items) = 'array'),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.oir_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  paper text not null,
  score integer not null check (score >= 0),
  total_questions integer not null default 50 check (total_questions > 0),
  duration_seconds integer check (duration_seconds is null or duration_seconds > 0),
  completed_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  check (score <= total_questions)
);

create table if not exists public.ppdt_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  picture_id integer,
  title text not null,
  story text not null,
  themes text[] not null default '{}',
  self_score integer check (self_score between 1 and 10),
  completed_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

create table if not exists public.olq_journals (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null,
  entry text not null,
  olq_tags text[] not null default '{}',
  confidence_score integer check (confidence_score between 1 and 10),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists prep_plans_user_status_idx on public.prep_plans (user_id, status);
create index if not exists centre_checklists_user_created_idx on public.centre_checklists (user_id, created_at desc);
create index if not exists oir_attempts_user_completed_idx on public.oir_attempts (user_id, completed_at desc);
create index if not exists ppdt_attempts_user_completed_idx on public.ppdt_attempts (user_id, completed_at desc);
create index if not exists olq_journals_user_created_idx on public.olq_journals (user_id, created_at desc);

drop trigger if exists set_profiles_updated_at on public.profiles;
create trigger set_profiles_updated_at
before update on public.profiles
for each row execute function public.set_updated_at();

drop trigger if exists set_prep_plans_updated_at on public.prep_plans;
create trigger set_prep_plans_updated_at
before update on public.prep_plans
for each row execute function public.set_updated_at();

drop trigger if exists set_centre_checklists_updated_at on public.centre_checklists;
create trigger set_centre_checklists_updated_at
before update on public.centre_checklists
for each row execute function public.set_updated_at();

drop trigger if exists set_olq_journals_updated_at on public.olq_journals;
create trigger set_olq_journals_updated_at
before update on public.olq_journals
for each row execute function public.set_updated_at();

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, full_name, avatar_url)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'name'),
    new.raw_user_meta_data->>'avatar_url'
  )
  on conflict (id) do update
  set
    email = excluded.email,
    full_name = coalesce(excluded.full_name, public.profiles.full_name),
    avatar_url = coalesce(excluded.avatar_url, public.profiles.avatar_url),
    updated_at = now();

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute function public.handle_new_user();

alter table public.profiles enable row level security;
alter table public.prep_plans enable row level security;
alter table public.centre_checklists enable row level security;
alter table public.oir_attempts enable row level security;
alter table public.ppdt_attempts enable row level security;
alter table public.olq_journals enable row level security;

drop policy if exists "Profiles are viewable by owner" on public.profiles;
create policy "Profiles are viewable by owner"
on public.profiles for select to authenticated
using ((select auth.uid()) = id);

drop policy if exists "Profiles can be inserted by owner" on public.profiles;
create policy "Profiles can be inserted by owner"
on public.profiles for insert to authenticated
with check ((select auth.uid()) = id);

drop policy if exists "Profiles can be updated by owner" on public.profiles;
create policy "Profiles can be updated by owner"
on public.profiles for update to authenticated
using ((select auth.uid()) = id)
with check ((select auth.uid()) = id);

drop policy if exists "Prep plans are owned by user" on public.prep_plans;
create policy "Prep plans are owned by user"
on public.prep_plans for all to authenticated
using ((select auth.uid()) = user_id)
with check ((select auth.uid()) = user_id);

drop policy if exists "Centre checklists are owned by user" on public.centre_checklists;
create policy "Centre checklists are owned by user"
on public.centre_checklists for all to authenticated
using ((select auth.uid()) = user_id)
with check ((select auth.uid()) = user_id);

drop policy if exists "OIR attempts are owned by user" on public.oir_attempts;
create policy "OIR attempts are owned by user"
on public.oir_attempts for all to authenticated
using ((select auth.uid()) = user_id)
with check ((select auth.uid()) = user_id);

drop policy if exists "PPDT attempts are owned by user" on public.ppdt_attempts;
create policy "PPDT attempts are owned by user"
on public.ppdt_attempts for all to authenticated
using ((select auth.uid()) = user_id)
with check ((select auth.uid()) = user_id);

drop policy if exists "OLQ journals are owned by user" on public.olq_journals;
create policy "OLQ journals are owned by user"
on public.olq_journals for all to authenticated
using ((select auth.uid()) = user_id)
with check ((select auth.uid()) = user_id);
