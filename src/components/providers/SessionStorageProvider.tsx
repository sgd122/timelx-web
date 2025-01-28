import type React from 'react';
import { createContext, useEffect, useState } from 'react';

import { useAppRouter } from '@/hooks/useAppRouter';

// Context 생성
interface SessionStorageContextProps {
  previousPage: string | null;
  getPreviousPage: () => string | null;
}

export const SessionStorageContext = createContext<
  SessionStorageContextProps | undefined
>(undefined);

// Provider 컴포넌트
export const SessionStorageProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const router = useAppRouter();
  const [previousPage, setPreviousPageState] = useState<string | null>(null);

  useEffect(() => {
    // 페이지가 변경될 때 이전 페이지 경로를 sessionStorage에 저장
    const handleRouteChange = (url: string) => {
      const currentPath = window.location.pathname;
      sessionStorage.setItem('previousPage', currentPath);
      setPreviousPageState(currentPath);
    };

    router.events.on('routeChangeStart', handleRouteChange);

    // 초기 로딩 시 sessionStorage에서 값 읽기
    const storedPage = sessionStorage.getItem('previousPage');
    if (storedPage) {
      setPreviousPageState(storedPage);
    }

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router]);

  const getPreviousPage = () => {
    return previousPage;
  };

  return (
    <SessionStorageContext.Provider value={{ previousPage, getPreviousPage }}>
      {children}
    </SessionStorageContext.Provider>
  );
};
