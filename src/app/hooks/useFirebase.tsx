import { getApps, initializeApp } from '@firebase/app';
import { getAnalytics, logEvent as _logEvent } from 'firebase/analytics';
import { getPerformance } from 'firebase/performance';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { firebaseConfig } from '@/app/lib/firebase/config';

const useFirebase = () => {
  const router = useRouter();

  useEffect(() => {
    let app;
    if (!getApps().length) {
      app = initializeApp(firebaseConfig);
    } else {
      app = getApps()[0];
    }

    const analytics = getAnalytics(app);
    getPerformance(app);

    const logEvent = () => {
      _logEvent(analytics, 'page_view');
      // _logEvent(analytics, 'screen_view');
    };

    router.events.on('routeChangeComplete', logEvent);

    // ✅ 최초 로드 시에도 `page_view` 실행
    logEvent();

    return () => {
      router.events.off('routeChangeComplete', logEvent);
    };
  }, [router]);
};

export default useFirebase;
