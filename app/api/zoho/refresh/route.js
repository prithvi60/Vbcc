import { NextResponse } from "next/server";

export async function POST(req) {
  const { refresh_token } = await req.json();

  const client_id = process.env.ZOHO_CLIENT_ID;
  const client_secret = process.env.ZOHO_CLIENT_SECRET;
  const tokenUrl = "https://accounts.zoho.com/oauth/v2/token";

  const body = new URLSearchParams({
    refresh_token,
    client_id,
    client_secret,
    grant_type: "refresh_token",
  });

  try {
    const response = await fetch(tokenUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: body.toString(),
    });

    const data = await response.json();

    if (response.ok) {
      return NextResponse.json({
        access_token: data.access_token,
        expires_in: data.expires_in,
      });
    } else {
      return NextResponse.json(
        { message: "Error refreshing token", error: data },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Error refreshing token:", error);
    return NextResponse.json(
      { message: "Error refreshing token", error: error.message },
      { status: 500 }
    );
  }
}
