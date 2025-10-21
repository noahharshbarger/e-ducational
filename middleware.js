// // Simple middleware for protected routes


// NOTE: This middleware protects /checkout (and previously /profile) by checking for a 'user' cookie.
// If you store authentication in localStorage (client-side), the server cannot see it.
// To make this work, you must set a cookie named 'user' when logging in.
// Otherwise, 'request.cookies.get("user")' will always be undefined and redirect will always happen.

import { NextResponse } from "next/server";

// NOTE: This middleware protects /checkout (and previously /profile) by checking for a 'user' cookie.
// If you store authentication in localStorage (client-side), the server cannot see it.
// To make this work, you must set a cookie named 'user' when logging in.
// Otherwise, 'request.cookies.get("user")' will always be undefined and redirect will always happen.

export function middleware(request) {
    // Check if the request is for a protected route
    if (request.nextUrl.pathname.startsWith("/checkout") || request.nextUrl.pathname.startsWith("/profile")) {
        // Try to get the 'user' cookie from the request
        const user = request.cookies.get("user");
        // If the cookie is not present, redirect to login
        if (!user) {
            // This will always redirect if you only use localStorage for auth
            return NextResponse.redirect(new URL("/login", request.url));
        }
    }
    // Allow the request to continue if authenticated or not a protected route
    return NextResponse.next();
}

export const config = {
    matcher: ["/checkout", "/profile"],
};
