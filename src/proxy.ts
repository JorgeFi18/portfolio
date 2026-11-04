import { NextResponse, type NextRequest } from "next/server";

type Locale = "es" | "en";
const defaultLocale: Locale = "es";
const localeCookie = "locale";

function isLocale(value: string): value is Locale {
  return value === "es" || value === "en";
}

function preferredLocale(request: NextRequest) {
  const stored = request.cookies.get(localeCookie)?.value;
  if (stored && isLocale(stored)) return stored;

  const header = request.headers.get("accept-language") ?? "";
  const tags = header.split(",").map((part) => part.split(";")[0].trim().toLowerCase());
  for (const tag of tags) {
    if (tag.startsWith("en")) return "en";
    if (tag.startsWith("es")) return "es";
  }
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const segment = pathname.split("/")[1] ?? "";

  if (isLocale(segment)) {
    const response = NextResponse.next();
    if (request.cookies.get(localeCookie)?.value !== segment) {
      response.cookies.set(localeCookie, segment, {
        path: "/",
        maxAge: 60 * 60 * 24 * 365,
        sameSite: "lax",
      });
    }
    return response;
  }

  if (pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = `/${preferredLocale(request)}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|.*\\..*).*)"],
};
