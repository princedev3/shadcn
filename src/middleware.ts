import { auth } from "./lib/auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const token =
    req.cookies.get("next-auth.session-token") || // For normal HTTP
    req.cookies.get("__Secure-next-auth.session-token"); // For HTTPS

  if (!token) {
    // Redirect to login page if no session token is found
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*", "/settings/:path*"],
};
