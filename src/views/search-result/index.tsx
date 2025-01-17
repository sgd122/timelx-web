import { Flex } from '@radix-ui/themes';

import EventList from '@/components/ui/EventList';
import SearchBar from '@/components/ui/SearchBar';
import { events } from '@/views/home/dummy';
import EventNotification from '@/views/search-result/_components/EventNotification';

const SearchResultContainer = () => {
  return (
    <>
      <SearchBar> 2025년 02월 08일 서울의 전시회 시간을 밝혀줘</SearchBar>

      <Flex direction="column" className="mt-10 gap-5">
        <EventNotification content="2025년 02월 08일 서울에서 열리는 전시회입니다. 정확한 시간은 이벤트 상세페이지를 참고해주세요!" />
        <EventList events={events} />
      </Flex>
    </>
  );
};

export default SearchResultContainer;
