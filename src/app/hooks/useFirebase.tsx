import { getApps, initializeApp } from '@firebase/app';
import { getPerformance } from 'firebase/performance';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { firebaseConfig } from '@/app/lib/firebase/config';
import { logEvent } from '@/app/utils/firebase';

const useFirebase = () => {
  const router = useRouter();

  useEffect(() => {
    let app;
    if (!getApps().length) {
      app = initializeApp(firebaseConfig);
    } else {
      app = getApps()[0];
    }

    getPerformance(app);

    const _logEvent = () => {
      logEvent('page_view');
      // _logEvent(analytics, 'screen_view');
    };

    router.events.on('routeChangeComplete', _logEvent);

    // ✅ 최초 로드 시에도 `page_view` 실행
    _logEvent();

    return () => {
      router.events.off('routeChangeComplete', _logEvent);
    };
  }, [router]);
};

export default useFirebase;
