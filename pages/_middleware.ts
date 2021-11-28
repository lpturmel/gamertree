import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req) {
    const token = await getToken({ req, secret: process.env.JWT_SECRET });
    const { pathname, nextUrl } = req.nextUrl;

    if (pathname.includes("/api/auth")) {
        return NextResponse.next();
    }
    if (!token) {
        if (pathname.includes("/api")) {
            return new Response("", {
                status: 403,
            });
        }
        if (pathname.includes("/account")) {
            return NextResponse.redirect("login");
        }
    } else {
        if (pathname === "/") {
            return NextResponse.redirect("/account/me");
        }
    }
}
