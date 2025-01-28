import Button from '@/components/ui/Button';
import { useAppRouter } from '@/hooks/useAppRouter';
import SearchForm from '@/views/search/components/SearchForm';
import useSearchInputs from '@/views/search/hooks/useSearchInputs';
import {
  searchResults,
  validateSearchParams,
} from '@/views/search/utils/searchUtils';

const SearchContainer = () => {
  const router = useAppRouter();
  const [
    { date, location, startTime, endTime, keyword },
    { setDate, setLocation, setStartTime, setEndTime, setKeyword },
  ] = useSearchInputs();

  const handleSearch = () => {
    const searchParams = {
      date,
      location,
      startTime,
      endTime,
      keyword,
    };

    if (validateSearchParams(searchParams)) return;

    searchResults(searchParams, router.push);
  };

  return (
    <>
      <SearchForm
        date={date}
        setDate={setDate}
        location={location}
        setLocation={setLocation}
        startTime={startTime}
        setStartTime={setStartTime}
        endTime={endTime}
        setEndTime={setEndTime}
        keyword={keyword}
        setKeyword={setKeyword}
      />
      <div className="absolute bottom-10 left-0 w-full px-6">
        <Button className="w-full" size="3" onClick={handleSearch}>
          검색
        </Button>
      </div>
    </>
  );
};

export default SearchContainer;
