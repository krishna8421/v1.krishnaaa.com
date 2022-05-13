import type { NextFetchEvent, NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest, event: NextFetchEvent) {
  const response = NextResponse.next();
  response.headers.set("X-Frame-Options", "DENY");
  return response;
}
