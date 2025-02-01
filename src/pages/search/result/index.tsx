import { PAGE_TITLE } from '@/shared/constants/title';
import { LogScreen } from '@/shared/ui/LogScreen';
import SearchResultContainer from '@/views/search-result';

const SearchResult = () => {
  return (
    <LogScreen params={{ title: PAGE_TITLE.SEARCH_RESULT }}>
      <SearchResultContainer />
    </LogScreen>
  );
};

export default SearchResult;
