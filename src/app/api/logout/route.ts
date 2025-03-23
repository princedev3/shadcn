import { NextRequest, NextResponse } from "next/server";

export async function POST() {
  const response = new NextResponse("Logged out", { status: 200 });

  response.headers.append(
    "Set-Cookie",
    `authjs.session-token=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0`
  );

  return response;
}
