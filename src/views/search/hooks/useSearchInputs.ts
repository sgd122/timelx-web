import useInput from '@/hooks/useInput';
import { INITIAL_SEARCH_VALUES } from '@/views/search/constants/initialValues';
import type {
  SearchFormInputs,
  SearchSetters,
  SearchValues,
} from '@/views/search/types/search';

const useSearchInputs = (): SearchFormInputs => {
  const fields = [
    { key: 'date', initialValue: INITIAL_SEARCH_VALUES.DATE },
    { key: 'location', initialValue: INITIAL_SEARCH_VALUES.LOCATION },
    { key: 'time', initialValue: INITIAL_SEARCH_VALUES.TIME },
    { key: 'keyword', initialValue: INITIAL_SEARCH_VALUES.KEYWORD },
  ] as const;

  const inputs = fields.map(({ key, initialValue }) => ({
    key,
    value: useInput<string>(initialValue),
  }));

  const values = inputs.reduce((acc, { key, value }) => {
    acc[key as keyof SearchValues] = value[0];
    return acc;
  }, {} as SearchValues);

  const setters = inputs.reduce((acc, { key, value }) => {
    acc[
      `set${key.charAt(0).toUpperCase()}${key.slice(1)}` as keyof SearchSetters
    ] = value[1];
    return acc;
  }, {} as SearchSetters);

  return [values, setters] as const;
};

export default useSearchInputs;
