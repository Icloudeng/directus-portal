import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { USER_LANG_COOKIE, USER_LANG_HEADER } from './constant/vars';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const header = request.headers;
  const userLang = header.get('Accept-Language');
  const cookie_lang = request.cookies.get(USER_LANG_COOKIE);
  const response = NextResponse.next();

  const language = cookie_lang || (userLang ? userLang.split(',')[0] : 'en-US');

  response.headers.set(USER_LANG_HEADER, language);

  return response;
}
