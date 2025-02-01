import { PAGE_TITLE } from '@/shared/constants/title';
import { useObserver } from '@/shared/hooks/useObserver';
import EventList from '@/shared/ui/EventList';
import { LogScreen } from '@/shared/ui/LogScreen';
import { events } from '@/views/home/dummy';

const HomeContainer = () => {
  const fetchNextPage = () => {
    console.log('fetchNextPage');
  };
  const onIntersect = ([entry]: IntersectionObserverEntry[]) =>
    entry.isIntersecting && fetchNextPage();

  useObserver({
    onIntersect,
  });

  return (
    <LogScreen params={{ title: PAGE_TITLE.HOME }}>
      <h2 className="sr-only">이벤트 리스트</h2>
      <EventList events={events} />
    </LogScreen>
  );
};

export default HomeContainer;
