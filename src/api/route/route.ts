import type { ApiRouteKey, ApiRouteParams, URLParams } from './types';

import { BASE_URL, VERSION } from '@/api/config';

const removeNullAndUndefined = <T extends URLParams>(obj: T) => {
  const result: Partial<T> = {};
  for (const key in obj) {
    if (obj[key] !== null && obj[key] !== undefined) {
      result[key] = obj[key];
    }
  }

  return result;
};

const urlGenerator = (apiUrl: string, params?: URLParams) => {
  const url = new URL(`${BASE_URL}${apiUrl}`);

  if (params) {
    const urlParams = new URLSearchParams(
      removeNullAndUndefined(params) as Record<string, never>
    );
    url.search = urlParams.toString();
  }

  return url.toString();
};
export const mainRoute = <K extends ApiRouteKey>(params: ApiRouteParams<K>) => {
  switch (params.key) {
    case 'main.sections':
      return urlGenerator(
        `${VERSION['V3']}/main/sections`,
        params.searchParams
      );
    case 'main.catalogs':
      return urlGenerator(`${VERSION['V3']}/main/catalogs`);
    case 'main.featureHotels':
      return urlGenerator(`${VERSION['V3']}/main/feature-hotels`);
    case 'main.faqs':
      return urlGenerator(`${VERSION['V3']}/main/faqs`);
    case 'main.reviews':
      return urlGenerator(`${VERSION['V3']}/main/reviews`);
    default:
      return '';
  }
};

export const authRoute = <K extends ApiRouteKey>(params: ApiRouteParams<K>) => {
  switch (params.key) {
    case 'auth.send':
      return urlGenerator(`${VERSION['V2']}/auth-send`);
    case 'auth.send.v3':
      return urlGenerator(`${VERSION['V3']}/auth-send`);
    case 'auth.etbs':
      return urlGenerator(`${VERSION['V2']}/login/social/callback/etbs`);
    case 'auth.check':
      return urlGenerator(`${VERSION['V2']}/auth-check`);
    case 'auth.check.token':
      return urlGenerator(`${VERSION['V2']}/sanctum/check/user`);
    case 'auth.check.email':
      return urlGenerator(`${VERSION['V2']}/membership/check/email`);
    case 'auth.check.info':
      return urlGenerator(`${VERSION['V2']}/membership/check/info`);
    case 'auth.check.duplicate.tel':
      return urlGenerator(`${VERSION['V2']}/membership/tel/duplicate-check`);
    case 'auth.check.duplicate.email':
      return urlGenerator(`${VERSION['V2']}/membership/email/duplicate-check`);
    case 'auth.signUp':
      return urlGenerator(`${VERSION['V2']}/membership/join`);
    case 'auth.update.info':
      return urlGenerator(`${VERSION['V2']}/membership/user`);
    case 'auth.find.id':
      return urlGenerator(`${VERSION['V2']}/membership/find/id`);
    case 'auth.reset.password':
      return urlGenerator(`${VERSION['V2']}/membership/user/password`);
    default:
      return '';
  }
};
