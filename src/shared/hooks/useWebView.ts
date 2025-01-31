import { useEffect, useRef } from 'react';

export const useWebView = () => {
  const isWebViewRef = useRef(false);

  useEffect(() => {
    if (isWebViewRef.current) return;

    if (typeof window !== 'undefined' && window.ReactNativeWebView) {
      isWebViewRef.current = true;
    }
  }, []);

  return {
    isWebView: isWebViewRef.current,
  };
};
