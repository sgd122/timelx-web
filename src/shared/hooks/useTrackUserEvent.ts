import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

import { logUserEvent } from '@/app/utils/firebase';

const useTrackUserEvent = () => {
  const session = useSession();

  useEffect(() => {
    if (session.status === 'authenticated' && session.data?.user) {
      logUserEvent(session.data.user);
    }
  }, [session.data?.user]);
};

export default useTrackUserEvent;
