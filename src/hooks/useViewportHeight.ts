import { useEffect, useState } from 'react';

const useViewportHeight = () => {
  const [viewportHeight, setViewportHeight] = useState('100vh');

  useEffect(() => {
    const updateHeight = () => {
      const vh = window.innerHeight * 0.01 + 0.2;
      setViewportHeight(`${vh * 100}px`);
    };

    updateHeight(); // 초기 실행
    window.addEventListener('resize', updateHeight); // 리사이즈 이벤트 추가

    return () => {
      window.removeEventListener('resize', updateHeight); // 이벤트 제거
    };
  }, []);

  return viewportHeight;
};

export default useViewportHeight;
