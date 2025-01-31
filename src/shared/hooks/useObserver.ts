import type { RefObject } from 'react';
import { useEffect } from 'react';

import { useScrollArea } from '@/shared/hooks/useScrollArea';

interface UseObserverProps {
  target?: RefObject<Element | null>; // 감지할 대상, ref를 넘길 예정
  onIntersect: (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => void; // 감지 시 실행할 callback 함수
  root?: Element | null; // 교차할 부모 요소, 기본값은 document
  rootMargin?: string; // root와 target이 감지하는 여백의 거리
  threshold?: number | number[]; // 임계점
}

export const useObserver = ({
  target,
  onIntersect,
  root = null,
  rootMargin = '0px',
  threshold = 1.0,
}: UseObserverProps): void => {
  const { scrollAreaRef, bottomRef } = useScrollArea();
  const _root = root ?? scrollAreaRef.current;
  const _target = target ?? bottomRef;

  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    if (_target?.current) {
      observer = new IntersectionObserver(onIntersect, {
        root: _root,
        rootMargin,
        threshold,
      });

      observer.observe(_target.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [target, _target, rootMargin, threshold]);
};
