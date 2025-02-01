import { isEmpty } from 'lodash-es';
import { useCallback } from 'react';

import { useAppRouter } from '@/shared/hooks/useAppRouter';
import { useToaster } from '@/shared/hooks/useToaster';

interface SearchParams {
  date: string;
  location: string;
  time: string;
  keyword: string;
}

const useSearchHandler = ({ date, location, time, keyword }: SearchParams) => {
  const router = useAppRouter();
  const toaster = useToaster();

  return useCallback(() => {
    if (isEmpty(date) || isEmpty(location)) {
      toaster.error('날짜와 지역은 필수 입력 항목입니다.');
      return;
    }

    const queryParams = new URLSearchParams({
      date,
      location,
      time,
      keyword,
    });

    router.push(`/search/result?${queryParams.toString()}`);
  }, [date, location, time, keyword, router, toaster]);
};

export default useSearchHandler;
