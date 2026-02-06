import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
    const token = req.cookies.get("token")?.value;
    const { pathname } = req.nextUrl;

    // Protect all /app/* routes
    if (pathname.startsWith('/app/')) {
        // Only check for token existence in middleware
        // Let the app layout handle user status validation
        // This prevents immediate redirects during login flow
        if (!token) {
            return NextResponse.redirect(new URL("/login", req.url));
        }
    }

    return NextResponse.next();
}

// Define which routes the middleware should run on
export const config = {
    matcher: [
        "/app/:path*",
    ],
};
