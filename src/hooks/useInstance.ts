import type { IncomingMessage } from 'http';

import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import axios from 'axios';
import type { NextApiRequestCookies } from 'next/dist/server/api-utils';
import { getSession } from 'next-auth/react';

import { BASE_URL } from '@/api/config';

// 토큰을 세팅하는 함수
const setAuthorizationHeader = async (
  instance: AxiosInstance,
  request?: AxiosRequestConfig
) => {
  const session = await getSession();
  if (!session || !session.user?.accessToken) return;

  const authHeaderValue = `Bearer ${session.user.accessToken}`;

  if (request) {
    if (!request.headers) request.headers = {};
    request.headers.Authorization = authHeaderValue;
  }

  instance.defaults.headers.common.Authorization = authHeaderValue;
};

const useInstance = async (
  req?: IncomingMessage & { cookies: NextApiRequestCookies }
) => {
  const instance = axios.create({ baseURL: BASE_URL });

  // 서버 사이드 렌더링 시 세션을 받아서 Authorization 헤더에 토큰 추가
  if (req) {
    const session = await getSession({ req });
    if (session?.user?.accessToken) {
      instance.defaults.headers.common.Authorization = `Bearer ${session.user.accessToken}`;
    }
  }

  // 요청 인터셉터
  instance.interceptors.request.use(async (request) => {
    if (!instance.defaults.headers.common.Authorization) {
      await setAuthorizationHeader(instance, request);
    }
    return request;
  });

  return instance;
};

export default useInstance;
