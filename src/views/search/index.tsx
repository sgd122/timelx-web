import type { SearchValues } from '@/features/search/types/search';
import SearchForm from '@/features/search/ui/SearchForm';
import {
  searchResults,
  validateSearchParams,
} from '@/features/search/utils/searchUtils';
import { useAppRouter } from '@/shared/hooks/useAppRouter';
import { useToaster } from '@/shared/hooks/useToaster';

const SearchContainer = () => {
  const router = useAppRouter();

  const toaster = useToaster();
  const handleSearch = (searchValues: SearchValues) => {
    if (validateSearchParams({ ...searchValues, toaster })) return;
    searchResults(searchValues, router.push);
  };

  return (
    <>
      <h2 className="sr-only">검색</h2>
      <SearchForm onSearch={handleSearch} />
    </>
  );
};

export default SearchContainer;
