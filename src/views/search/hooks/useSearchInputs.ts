import useInput from '@/hooks/useInput';
import { INITIAL_SEARCH_VALUES } from '@/views/search/constants/initialValues';
import type { SearchFormInputs } from '@/views/search/types/search';

const useSearchInputs = (): SearchFormInputs => {
  const [date, setDate] = useInput<string>(INITIAL_SEARCH_VALUES.DATE);
  const [location, setLocation] = useInput<string>(
    INITIAL_SEARCH_VALUES.LOCATION
  );
  const [startTime, setStartTime] = useInput<string>(
    INITIAL_SEARCH_VALUES.START_TIME
  );
  const [endTime, setEndTime] = useInput<string>(
    INITIAL_SEARCH_VALUES.END_TIME
  );
  const [keyword, setKeyword] = useInput<string>(INITIAL_SEARCH_VALUES.KEYWORD);

  return [
    { date, location, startTime, endTime, keyword },
    { setDate, setLocation, setStartTime, setEndTime, setKeyword },
  ] as const;
};

export default useSearchInputs;
