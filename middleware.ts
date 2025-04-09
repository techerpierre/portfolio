import { createI18nMiddleware } from "next-international/middleware";
import { NextRequest, NextResponse } from "next/server";
import Jwt from "./lib/jwt";

const AuthMiddleware = async (request: NextRequest): Promise<NextResponse | null> => {
  const matchers: { regexp: RegExp; redirect: URL; onlyNoAuth: boolean }[] = [
    {
      regexp: /^\/(fr|en)\/admin$/,
      redirect: new URL("/auth/login", request.nextUrl.origin),
      onlyNoAuth: false,
    },
    {
      regexp: /^\/(fr|en)\/auth\/login$/,
      redirect: new URL("/admin", request.nextUrl.origin),
      onlyNoAuth: true,
    }
  ]

  const jwt = request.cookies.get("jwt")?.value;
  const isLoggedIn = jwt ? !!Jwt.verify(jwt) : false;

  for (const matcher of matchers) {
    const isMatching = !!request.nextUrl.pathname.match(matcher.regexp);
    if (isMatching) {
      if ((!matcher.onlyNoAuth && isLoggedIn) || (matcher.onlyNoAuth && !isLoggedIn))
        return null;
      else
        return NextResponse.redirect(matcher.redirect);
    }
  }
  return null;
}

const I18nMiddleware = createI18nMiddleware({
  locales: ["en", "fr"],
  defaultLocale: "en",
});

export async function middleware(request: NextRequest) {
  const authResponse = await AuthMiddleware(request);
  if (authResponse)
    return authResponse;
  const response = I18nMiddleware(request);
  response.cookies.set("x-url", request.url);
  return response;
}

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)"],
};