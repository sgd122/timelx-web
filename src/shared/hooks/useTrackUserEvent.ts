import { useEffect } from 'react';

import { logUserEvent } from '@/app/utils/firebase';
import { useUserSession } from '@/shared/hooks/useUserSession';

const useTrackUserEvent = () => {
  const { isAuthenticated, user } = useUserSession();

  useEffect(() => {
    if (isAuthenticated && user) {
      logUserEvent(user);
    }
  }, [isAuthenticated, user]);
};

export default useTrackUserEvent;
