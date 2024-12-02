import { NextResponse } from "next/server";

export async function POST(req) {
  // Extract the authorization code from the request body
  const { code } = await req.json();

  // Your Zoho OAuth details
  const client_id = process.env.ZOHO_CLIENT_ID;
  const client_secret = process.env.ZOHO_CLIENT_SECRET;

  const tokenUrl = "https://accounts.zoho.in/oauth/v2/token";

  // Prepare the payload for the POST request to exchange the code for a token
  const body = new URLSearchParams({
    code,
    client_id,
    client_secret,
    grant_type: "authorization_code",
  });

  try {
    // Send the POST request to Zoho to exchange code for access token
    const response = await fetch(tokenUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: body.toString(),
    });

    // Parse the response
    const data = await response.json();

    if (response.ok) {
      // Return the access token and refresh token
      return NextResponse.json({
        access_token: data.access_token,
        refresh_token: data.refresh_token,
        expires_in: data.expires_in,
      });
    } else {
      // Handle error responses
      return NextResponse.json(
        { message: "Error generating access token", error: data },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Error exchanging code for token:", error);
    return NextResponse.json(
      { message: "Error generating access token", error: error.message },
      { status: 500 }
    );
  }
}
