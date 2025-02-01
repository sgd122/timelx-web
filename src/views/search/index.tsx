import type { SearchValues } from '@/features/search/types/search';
import SearchForm from '@/features/search/ui/SearchForm';
import {
  searchResults,
  validateSearchParams,
} from '@/features/search/utils/searchUtils';
import { PAGE_TITLE } from '@/shared/constants/title';
import { useAppRouter } from '@/shared/hooks/useAppRouter';
import { LogScreen } from '@/shared/ui/LogScreen';

const SearchContainer = () => {
  const router = useAppRouter();

  const handleSearch = (searchValues: SearchValues) => {
    if (validateSearchParams(searchValues)) return;
    searchResults(searchValues, router.push);
  };

  return (
    <LogScreen params={{ title: PAGE_TITLE.SEARCH }}>
      <SearchForm onSearch={handleSearch} />
    </LogScreen>
  );
};

export default SearchContainer;
