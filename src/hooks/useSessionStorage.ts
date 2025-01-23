import { useContext } from 'react';

import { SessionStorageContext } from '@/components/providers/SessionStorageProvider';

export const useSessionStorage = () => {
  const context = useContext(SessionStorageContext);
  if (!context) {
    throw new Error(
      'useSessionStorage must be used within a SessionStorageProvider'
    );
  }
  return context;
};
