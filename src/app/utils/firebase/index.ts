import { initializeApp } from '@firebase/app';
import {
  getAnalytics as getAnalyticsFirebase,
  logEvent as _logEvent,
} from 'firebase/analytics';

import { firebaseConfig } from '@/app/lib/firebase/config';
import logUserEvent from '@/app/utils/firebase/logUserEvent';

const getAnalytics = () => {
  const app = initializeApp(firebaseConfig);
  return getAnalyticsFirebase(app);
};

function logEvent(
  eventName: string,
  params?: { [key: string]: unknown } | undefined
) {
  try {
    if (process.env.NODE_ENV !== 'production') return;

    const analytics = getAnalytics();
    _logEvent(analytics, eventName, params);
  } catch (error) {
    /* empty */
  }
}

export { getAnalytics, logEvent, logUserEvent };
