import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';
import { getSession } from 'next-auth/react';

import { BASE_URL } from '@/api/config';

const instance = axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.request.use(async (request) => {
  if (!isAccessTokenAttachedToAxiosDefaults())
    await setAccessTokenOnRequestAndAsAxiosDefaults(request);
  return request;
});

const isAccessTokenAttachedToAxiosDefaults = () => {
  const authHeader = instance.defaults.headers.common.Authorization;
  if (authHeader === null || authHeader === undefined || authHeader === '')
    return false;
  return true;
};

const setAccessTokenOnRequestAndAsAxiosDefaults = async (
  request: AxiosRequestConfig
) => {
  const session = await getSession();

  if (session) {
    const AuthHeaderValue = `Bearer ${session?.user?.accessToken}`;
    if (!request.headers) request.headers = {};
    request.headers.Authorization = AuthHeaderValue;

    instance.defaults.headers.common.Authorization = AuthHeaderValue;
  }
};

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    // NOTE: 응답 오류가 있는 작업 수행
    if (err.response && err.response.status) {
      switch (err.response.status) {
        case 400:
          return Promise.reject(err);
        default:
          return Promise.reject(err);
      }
    }

    return Promise.reject(err);
  }
);

export default instance;
