import { PAGE_TITLE } from '@/shared/constants/title';
import { LogScreen } from '@/shared/ui/LogScreen';
import SearchContainer from '@/views/search';

const Search = () => {
  return (
    <LogScreen params={{ title: PAGE_TITLE.SEARCH }}>
      <SearchContainer />
    </LogScreen>
  );
};

export default Search;
