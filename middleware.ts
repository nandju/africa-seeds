import { NextRequest, NextResponse } from 'next/server';

const locales = ['fr', 'en', 'es', 'de'];
const defaultLocale = 'fr';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Extraire la locale si présente
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // Si l'URL a déjà une locale, laisser passer
  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Si c'est la racine, rediriger vers la locale par défaut
  if (pathname === '/') {
    return NextResponse.redirect(
      new URL(`/${defaultLocale}`, request.url)
    );
  }

  // Pour les autres routes sans locale, ajouter la locale par défaut
  // Cela permet d'avoir /fr/a-propos au lieu de /a-propos
  return NextResponse.redirect(
    new URL(`/${defaultLocale}${pathname}`, request.url)
  );
}

export const config = {
  matcher: [
    // Match all pathnames except for
    // - api routes
    // - _next (Next.js internals)
    // - _vercel (Vercel internals)
    // - files with extensions (e.g. .ico, .png, etc.)
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ],
};
