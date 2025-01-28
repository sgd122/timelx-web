import { useEffect, useState } from 'react';

import { useAppRouter } from '@/hooks/useAppRouter';

export const useFormDirty = (): {
  isFormDirty: boolean;
  setFormDirty: (dirty: boolean) => void;
} => {
  const [isFormDirty, setIsFormDirty] = useState(false);
  const router = useAppRouter();

  // 페이지 이동 시 경고 메시지 표시
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (
        isFormDirty &&
        !window.confirm('변경 사항이 사라질 수 있습니다. 계속하시겠습니까?')
      ) {
        router.events.emit('routeChangeError');
        throw 'Route change aborted.';
      }
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [isFormDirty, router]);

  // 브라우저 닫기, 새로고침 시 경고 메시지 표시
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isFormDirty) {
        e.preventDefault();
        e.returnValue = ''; // 대부분 브라우저에서 빈 문자열만 지원
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [isFormDirty]);

  return {
    isFormDirty,
    setFormDirty: setIsFormDirty,
  };
};
