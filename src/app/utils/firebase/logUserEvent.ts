import type { IUser } from '@api/user';
import { setUserId, setUserProperties } from 'firebase/analytics';

import { getAnalytics } from '@/app/utils/firebase/index';

const logUserEvent = (user?: IUser) => {
  const analytics = getAnalytics();
  if (!user) {
    setUserId(analytics, null);
    setUserProperties(analytics, {
      id: '',
      name: '',
      nick_name: '',
      email: '',
    });
    return;
  }

  const userId = String(user.id ?? '');
  setUserId(analytics, userId);
  setUserProperties(analytics, {
    id: userId,
    name: user.name,
    nick_name: user.nick_name ?? '',
    email: user.email ?? '',
  });
};

export default logUserEvent;
