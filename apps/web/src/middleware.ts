import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import {
  DEFAULT_USER_LANG,
  USER_LANG_COOKIE,
  USER_LANG_HEADER,
} from './constant/vars';

const PUBLIC_FILE = /\.(.*)$/;

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  if (
    request.nextUrl.pathname.startsWith('/_next') ||
    request.nextUrl.pathname.includes('/api/') ||
    PUBLIC_FILE.test(request.nextUrl.pathname)
  ) {
    return;
  }

  const header = request.headers;
  const userLang = header.get('Accept-Language');
  const cookie_lang = request.cookies.get(USER_LANG_COOKIE);
  const response = NextResponse.next();

  const language =
    cookie_lang || (userLang ? userLang.split(',')[0] : DEFAULT_USER_LANG);

  response.headers.set(USER_LANG_HEADER, language);

  return response;
}
