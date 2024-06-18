import createIntlMiddleware from "next-intl/middleware";
import { pathnames, locales, localePrefix } from "./config";
import { NextRequest } from "next/server";

// export default createMiddleware({
//   defaultLocale: "en",
//   locales,
//   pathnames,
//   localePrefix,
// });

export function middleware(request: NextRequest) {
  const handleI18nRouting = createIntlMiddleware({
    defaultLocale: "en",
    locales,
    pathnames,
    localePrefix,
  });
  const response = handleI18nRouting(request);
  const currentUser = request.cookies.get("token")?.value;
  console.log("currentUser", currentUser);
  if (currentUser && !request.nextUrl.pathname.startsWith("/dashboard")) {
    return Response.redirect(new URL("/dashboard", request.url));
  }

  if (!currentUser && !request.nextUrl.pathname.startsWith("/auth")) {
    return Response.redirect(new URL("/auth", request.url));
  }
  return response;
}
export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    "/",

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    "/(de|en)/:path*",

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    "/((?!_next|_vercel|.*\\..*).*)",
  ],
};
// export const config = {
//   // Skip all paths that should not be internationalized
//   matcher: ["/((?!_next|.*\\..*).*)"],
// };
// import type { NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
//   const currentUser = request.cookies.get("token")?.value;

//   if (currentUser && !request.nextUrl.pathname.startsWith("/dashboard")) {
//     return Response.redirect(new URL("/dashboard", request.url));
//   }

//   if (!currentUser && !request.nextUrl.pathname.startsWith("/auth")) {
//     return Response.redirect(new URL("/auth", request.url));
//   }
// }

// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
// };
