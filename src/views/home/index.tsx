import EventList from '@/components/ui/EventList';
import { events } from '@/views/home/dummy';

const HomeContainer = () => {
  return (
    <>
      <h2 className="sr-only">이벤트 리스트</h2>
      <EventList events={events} />
    </>
  );
};

export default HomeContainer;
