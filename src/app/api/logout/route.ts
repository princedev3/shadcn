import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const baseUrl = new URL(req.url).origin; // Get the base URL dynamically
    const redirectUrl = `${baseUrl}/login`;
    return NextResponse.redirect(redirectUrl, {
      headers: {
        "Set-Cookie": `authjs.session-token=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0`,
      },
    });
  } catch (error) {
    console.error("Logout error:", error);
    return NextResponse.json({ message: "Logout failed" }, { status: 500 });
  }
};
