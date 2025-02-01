import type { IUser } from '@api/user';
import { setUserProperties } from 'firebase/analytics';

import { getAnalytics } from '@/app/utils/firebase/index';

const logUserEvent = (user: IUser) => {
  const analytics = getAnalytics();

  setUserProperties(analytics, {
    id: String(user.id ?? ''),
    name: user.name,
    nick_name: user.nick_name ?? '',
    email: user.email ?? '',
  });
};

export default logUserEvent;
