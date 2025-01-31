import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

import { ROUTES } from '@/shared/constants/routes';

export async function middleware(req: NextRequest) {
  const token = await getToken({ req });
  const { pathname } = req.nextUrl;

  const isPublicRoute = ROUTES.PUBLIC.some((route) => {
    if (route.includes('[eventId]')) {
      // [eventId]를 동적 경로로 처리
      const dynamicRouteRegex = new RegExp(
        `^${route.replace('[eventId]', '\\d+')}$`
      );
      return dynamicRouteRegex.test(pathname);
    }
    return route === pathname;
  });

  if (!isPublicRoute && !token) {
    const url = req.nextUrl.clone();
    url.pathname = '/auth/login';

    // ✅ 쿠키를 통해 메시지 전달
    const response = NextResponse.redirect(url);
    response.cookies.set('auth_error', 'unauthorized', {
      path: '/',
      httpOnly: true,
      maxAge: 5,
    });

    return response;
  }

  if (ROUTES.PRIVATE.some((route) => route === pathname) && token) {
    const url = req.nextUrl.clone();
    url.pathname = '/';
    url.searchParams.delete('message');
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next|favicon.ico).*)'],
};
