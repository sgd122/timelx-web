import {
  authRoute,
  bannersRoute,
  collectionsRoute,
  countryRoute,
  etbsRoute,
  hotelRoute,
  mainRoute,
  mypageRoute,
  promotionsRoute,
  reservationRoute,
  searchRoute,
  visitRoute,
  vouchersRoute,
} from '@/api/route/route';

import { ApiRouteKey, ApiRouteParams } from './types';

const getDomain = (key: ApiRouteKey) => key.split('.')[0];

export const apiRoute = <K extends ApiRouteKey>(params: ApiRouteParams<K>) => {
  const domain = getDomain(params.key);

  switch (domain) {
    case 'banners':
      return bannersRoute(params);
    case 'main':
      return mainRoute(params);
    case 'search':
      return searchRoute(params);
    case 'auth':
      return authRoute(params);
    case 'mypage':
      return mypageRoute(params);
    case 'hotel':
      return hotelRoute(params);
    case 'reservation':
      return reservationRoute(params);
    case 'promotions':
      return promotionsRoute(params);
    case 'country':
      return countryRoute(params);
    case 'visit':
      return visitRoute(params);
    case 'vouchers':
      return vouchersRoute(params);
    case 'collections':
      return collectionsRoute(params);
    case 'etbs':
      return etbsRoute(params);
    default:
      throw new Error(`Invalid route key: ${params.key}`);
  }
};
