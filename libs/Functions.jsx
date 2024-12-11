export async function getAccessToken(code) {
    try {
        const response = await fetch("/api/zoho/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ code }), // Pass the authorization code
        });

        const data = await response.json();

        if (response.ok) {
            console.log("Access Token:");
            console.log("Refresh Token:");
            // You can now use the access token in further API requests
        } else {
            console.error("Error:", data.message);
        }
    } catch (error) {
        console.error("Failed to get access token:", error);
    }
}

export async function refreshAccessToken(refresh_token) {
    try {
        const response = await fetch("/api/zoho/refresh", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ refresh_token }),
        });

        const data = await response.json();

        if (response.ok) {
            console.log("Refreshed Access Token:");
        } else {
            console.error("Error:", data.message);
        }
    } catch (error) {
        console.error("Failed to refresh token:", error);
    }
}
