import {
    withApiAuthRequired,
    getSession,
    getAccessToken,
} from "@auth0/nextjs-auth0";
import { NextResponse, NextRequest } from "next/server";
export async function middleware(req: NextRequest, res: NextResponse) {
    //const session = getAccessToken(req as any, res as any);
    return NextResponse.next();
}
