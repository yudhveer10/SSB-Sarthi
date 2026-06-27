import "server-only";

import { redirect } from "next/navigation";
import type { User } from "@supabase/supabase-js";
import type { Database } from "../database.types";
import { createClient } from "../supabase/server";

type ServerSupabaseClient = Awaited<ReturnType<typeof createClient>>;

export class AuthenticationError extends Error {
  constructor(message = "Authentication required") {
    super(message);
    this.name = "AuthenticationError";
  }
}

export type AuthenticatedContext = {
  supabase: ServerSupabaseClient;
  user: User;
  userId: string;
};

export async function getAuthenticatedContext(): Promise<AuthenticatedContext | null> {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data.user) {
    return null;
  }

  return {
    supabase,
    user: data.user,
    userId: data.user.id,
  };
}

export async function requireAuthenticatedContext(): Promise<AuthenticatedContext> {
  const context = await getAuthenticatedContext();

  if (!context) {
    throw new AuthenticationError();
  }

  return context;
}

export async function requireAuthenticatedContextOrRedirect(
  redirectTo = "/signin",
): Promise<AuthenticatedContext> {
  const context = await getAuthenticatedContext();

  if (!context) {
    redirect(redirectTo);
  }

  return context;
}

export type ServerTableName = keyof Database["public"]["Tables"];
