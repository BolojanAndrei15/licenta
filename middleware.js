import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

const ADMIN_ROLES = ["Administrator", "Primar", "Secretar General"];

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/e-registratura")) {
    if (!token) {
      const loginUrl = new URL("/login", req.url);
      return NextResponse.redirect(loginUrl);
    }
    if (!ADMIN_ROLES.includes(token.rol)) {
      const depId = token.departament_id || token.departament || "";
      // Permite accesul la /e-registratura/[departmentID]/[registruID] pentru orice rol (acceptă și UUID)
      const match = pathname.match(/^\/e-registratura\/([^/]+)\/([^/]+)$/);
      if (match) {
        return NextResponse.next();
      }
      // Permite accesul la /e-registratura/[departmentID] pentru orice rol (nu doar admin)
      if (depId && pathname === `/e-registratura/${depId}`) {
        return NextResponse.next();
      }
      // Redirecționează către departamentul propriu dacă accesează /e-registratura sau alt departament
      if (depId) {
        const depUrl = new URL(`/e-registratura/${depId}`, req.url);
        return NextResponse.redirect(depUrl);
      } else {
        const loginUrl = new URL("/login", req.url);
        return NextResponse.redirect(loginUrl);
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/e-registratura", "/e-registratura/:path*"]
};
