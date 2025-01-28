import { useContext } from 'react';

import { ScrollAreaContext } from '@/components/providers/ScrollAreaProvider';

export const useScrollArea = () => {
  const context = useContext(ScrollAreaContext);
  if (!context) {
    throw new Error('useScrollArea must be used within a ScrollAreaProvider');
  }
  return context;
};
