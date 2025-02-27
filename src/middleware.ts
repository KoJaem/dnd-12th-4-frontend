import { NextRequest, NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"

export default async function middleware(request: NextRequest) {
  const token = await getToken({ req: request })
  const { pathname } = request.nextUrl

  if (pathname === "/") {
    return NextResponse.next()
  }

  if (!token || !token.expiredAccessToken || Math.floor(Date.now() / 1000) > token.expiredAccessToken) {
    return NextResponse.redirect(new URL("/", request.url))
  }

  return NextResponse.next()
}
export const config = {
  matcher: ["/((?!^$|^auth$|api|_next|static|public|favicon.ico|.+\\.[\\w]+$).*)"]
}
