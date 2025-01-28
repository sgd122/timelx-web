import type { UrlObject } from 'url';

import { useRouter } from 'next/router';

import { DOMAIN } from '@/constants/url';
import { useWebView } from '@/hooks/useWebView';
import { sendRouterEvent } from '@/utils/sendRouterEvent';

/**
 * push 함수에 추가로 넘길 수 있는 옵션 타입
 * - shallow?: boolean            Next.js의 라우터 기본 옵션
 * - appScreenName?: string       웹뷰 전용으로 함께 보낼 스크린 이름
 * - appSendData?: Record<string, unknown> 웹뷰로 함께 보낼 추가 데이터
 */
export interface AppRouterOptions {
  shallow?: boolean;
  appScreenName?: string;
  appSendData?: Record<string, unknown>;
}

/**
 * useAppRouter 훅에서 제공하는 push 함수의 시그니처
 * - url, as: Next.js 라우터가 허용하는 string 또는 UrlObject
 * - options: AppRouterOptions
 * - return: 웹 환경에서 router.push가 반환하는 Promise<boolean>,
 *           웹뷰 환경에서는 sendRouterEvent가 반환하는 타입(주로 Promise<void> 또는 void)을 가정
 */
export type AppRouterPush = (
  url: string | UrlObject,
  as?: string | UrlObject,
  options?: AppRouterOptions
) => Promise<boolean | void>;

/**
 * useAppRouter 훅이 반환하는 객체의 타입
 */
export interface UseAppRouterReturn {
  push: AppRouterPush;
}

/**
 * 웹뷰 환경과 웹 환경을 구분하여 push 함수를 제공하는 커스텀 훅
 */
export const useAppRouter = (): UseAppRouterReturn => {
  const { isWebView } = useWebView();
  const router = useRouter();

  const push: AppRouterPush = async (url, as, options = { shallow: true }) => {
    if (isWebView) {
      // 웹뷰 환경: 이벤트를 네이티브 쪽에 알리는 로직
      return sendRouterEvent({
        path: `${DOMAIN}/${url}`,
        screenName: options.appScreenName ?? '',
        data: { ...(options.appSendData ?? {}) },
      });
    }

    // 웹 환경: Next.js 라우터 사용
    return router.push(url, as, options);
  };

  return { push };
};
