import type { SearchValues } from '@/features/search/types/search';
import SearchForm from '@/features/search/ui/SearchForm';
import {
  searchResults,
  validateSearchParams,
} from '@/features/search/utils/searchUtils';
import { useAppRouter } from '@/shared/hooks/useAppRouter';

const SearchContainer = () => {
  const router = useAppRouter();

  const handleSearch = (searchValues: SearchValues) => {
    if (validateSearchParams(searchValues)) return;
    searchResults(searchValues, router.push);
  };

  return <SearchForm onSearch={handleSearch} />;
};

export default SearchContainer;
