import { NextResponse } from "next/server";
import { requireAuthenticatedContext } from "../../_lib/backend/auth";

export async function GET() {
  const { supabase, user, userId } = await requireAuthenticatedContext();

  const { data: profile, error } = await supabase
    .from("profiles")
    .select("full_name,email,onboarding_completed")
    .eq("id", userId)
    .maybeSingle();

  if (error) {
    return NextResponse.json({ error: "Unable to load account" }, { status: 500 });
  }

  return NextResponse.json({
    user: {
      id: user.id,
      email: user.email,
    },
    profile,
  });
}
