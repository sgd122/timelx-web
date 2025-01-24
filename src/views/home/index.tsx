import EventList from '@/components/ui/EventList';
import { useObserver } from '@/hooks/useObserver';
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
    <>
      <h2 className="sr-only">이벤트 리스트</h2>
      <EventList events={events} />
    </>
  );
};

export default HomeContainer;
