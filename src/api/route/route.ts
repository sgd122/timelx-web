import { BASE_URL, VERSION } from '@/api/config';

import { ApiRouteKey, ApiRouteParams, URLParams } from './types';

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
    const urlParams = new URLSearchParams(removeNullAndUndefined(params) as {});
    url.search = urlParams.toString();
  }

  return url.toString();
};

export const bannersRoute = <K extends ApiRouteKey>(
  params: ApiRouteParams<K>
) => {
  switch (params.key) {
    case 'banners.carousel':
      return urlGenerator(
        `${VERSION['V3']}/banners/carousel`,
        params.searchParams
      );
    case 'banners.top':
      return urlGenerator(`${VERSION['V3']}/banners/top`, params.searchParams);
    case 'banners.bottom':
      return urlGenerator(
        `${VERSION['V3']}/banners/bottom`,
        params.searchParams
      );
    default:
      return '';
  }
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

export const mypageRoute = <K extends ApiRouteKey>(
  params: ApiRouteParams<K>
) => {
  switch (params.key) {
    case 'mypage':
      return urlGenerator(`${VERSION['V2']}/membership/mypage`);
    case 'mypage.notification':
      return urlGenerator(
        `${VERSION['V2']}/membership/mypage/edit/notification`
      );
    case 'mypage.faq':
      return urlGenerator(`${VERSION['V2']}/membership/mypage/faq`);
    case 'mypage.reservations':
      return urlGenerator(
        `${VERSION['V2']}/membership/mypage/reservations`,
        params.searchParams
      );
    case 'mypage.reservations.detail':
      return urlGenerator(
        `${VERSION['V2']}/membership/mypage/reservations/${params.searchParams.id}`
      );
    case 'mypage.language':
      return urlGenerator(`${VERSION['V2']}/membership/mypage/edit/language`);
    default:
      return '';
  }
};

export const hotelRoute = <K extends ApiRouteKey>(
  params: ApiRouteParams<K>
) => {
  switch (params.key) {
    case 'hotel':
      return urlGenerator(`${VERSION['V2']}/hotels/${params.searchParams.id}`);
    case 'hotel.reviews':
      return urlGenerator(
        `${VERSION['V2']}/hotel/${params.searchParams.id}/reviews`,
        { page: params.searchParams.page }
      );
    case 'hotel.reviews.detail':
      return urlGenerator(
        `${VERSION['V2']}/hotel/${params.searchParams.id}/reviews/${params.searchParams.reviewId}`
      );
    case 'hotel.items':
      return urlGenerator(
        `${VERSION['V2']}/hotels/${params.searchParams.id}/items`
      );
    case 'hotel.pagination':
      return urlGenerator(
        `${VERSION['V2']}/hotels/${params.searchParams.id}/pagination`
      );
    case 'hotel.notice':
      return urlGenerator(
        `${VERSION['V2']}/hotels/${params.searchParams.id}/notice`
      );
    case 'hotel.otherHotels':
      return urlGenerator(
        `${VERSION['V2']}/hotels/${params.searchParams.id}/other-hotels`
      );
    case 'hotel.room.type':
      return urlGenerator(
        `${VERSION['V2']}/hotels/${params.searchParams.id}/items/${params.searchParams.roomId}/range/${params.searchParams.fromDate}/${params.searchParams.toDate}/room-type`
      );
    case 'hotel.room.type.tour':
      return urlGenerator(
        `${VERSION['V2']}/hotels/${params.searchParams.id}/items/${params.searchParams.roomId}/date/${params.searchParams.fromDate}/possible-time`
      );
    default:
      return '';
  }
};

export const reservationRoute = <K extends ApiRouteKey>(
  params: ApiRouteParams<K>
) => {
  switch (params.key) {
    case 'reservation':
      return urlGenerator(
        `${VERSION['V2']}/reservations/${params.searchParams.id}`
      );
    case 'reservation.temporary.save':
      return urlGenerator(`${VERSION['V2']}/reservation/temporary-save`);
    case 'reservation.temporary.storage':
      return urlGenerator(
        `${VERSION['V2']}/reservation/${params.searchParams.id}/payment/temporary-storage`
      );
    case 'reservation.payment':
      return urlGenerator(
        `${VERSION['V2']}/reservation/${params.searchParams.id}/payment/process`
      );
    case 'reservation.save':
      return urlGenerator(`${VERSION['V2']}/payment/save`);
    case 'reservation.result':
      return urlGenerator(
        `${VERSION['V2']}/reservation/${params.searchParams.id}/results`
      );
    case 'reservation.list':
      return urlGenerator(`${VERSION['V2']}/outside/inicis/relay/getcardlist`);
    case 'reservation.etbs.log':
      return urlGenerator(
        `${VERSION['V2']}/reservation/${params.searchParams.id}/etbs/log`
      );
    case 'reservation.etbs.success':
      return urlGenerator(
        `${VERSION['V2']}/reservation/${params.searchParams.id}/etbs/success`
      );
    case 'reservation.etbs.fail':
      return urlGenerator(
        `${VERSION['V2']}/reservation/${params.searchParams.id}/etbs/fail`
      );
    default:
      return '';
  }
};

export const searchRoute = <K extends ApiRouteKey>(
  params: ApiRouteParams<K>
) => {
  switch (params.key) {
    case 'search.regionState':
      return urlGenerator(`${VERSION['V2']}/search/regionState`);
    case 'search.preview':
      return urlGenerator(`${VERSION['V2']}/search/preview`);
    case 'search.list':
      return urlGenerator(`${VERSION['V2']}/search/list`);
    case 'search.otherHotels':
      return urlGenerator(`${VERSION['V2']}/search/other-hotels`);
    default:
      return '';
  }
};

export const visitRoute = <K extends ApiRouteKey>(
  params: ApiRouteParams<K>
) => {
  switch (params.key) {
    case 'visit':
      return urlGenerator(`${VERSION['V3']}/visit-routes`);
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

export const vouchersRoute = <K extends ApiRouteKey>(
  params: ApiRouteParams<K>
) => {
  switch (params.key) {
    case 'vouchers':
      return urlGenerator(`${VERSION['V2']}/vouchers/groups`);
    default:
      return '';
  }
};

export const collectionsRoute = <K extends ApiRouteKey>(
  params: ApiRouteParams<K>
) => {
  switch (params.key) {
    case 'collections':
      return urlGenerator(`${VERSION['V2']}/collections`, params.searchParams);
    default:
      return '';
  }
};

export const promotionsRoute = <K extends ApiRouteKey>(
  params: ApiRouteParams<K>
) => {
  switch (params.key) {
    case 'promotions':
      return urlGenerator(`${VERSION['V3']}/promotions`, params.searchParams);
    case 'promotions.detail':
      return urlGenerator(
        `${VERSION['V3']}/promotions/${params.searchParams.tag}`,
        params.searchParams
      );
    default:
      return '';
  }
};

export const countryRoute = <K extends ApiRouteKey>(
  params: ApiRouteParams<K>
) => {
  switch (params.key) {
    case 'country':
      return urlGenerator(`${VERSION['V2']}/country/index`);
    default:
      return '';
  }
};

const urlEtbsGenerator = (apiUrl: string, params?: URLParams) => {
  const url = new URL(apiUrl);

  if (params) {
    const urlParams = new URLSearchParams(removeNullAndUndefined(params) as {});
    url.search = urlParams.toString();
  }

  return url.toString();
};

export const etbsRoute = <K extends ApiRouteKey>(params: ApiRouteParams<K>) => {
  switch (params.key) {
    case 'etbs.point':
      return urlEtbsGenerator(
        `${process.env.NEXT_PUBLIC_URL}/api/proxy/wl/servlets/bene.api.AvailAmt`,
        params.searchParams
      );
    case 'etbs.payment':
      return urlEtbsGenerator(
        `${process.env.NEXT_PUBLIC_URL}/api/proxy/wl/servlets/tbs.pmt.vendor.gate.URLConnLinkGateJson`,
        params.searchParams
      );
    default:
      return '';
  }
};
