import EventList from '@/components/ui/EventList';
import { events } from '@/views/home/dummy';

const HomeContainer = () => {
  return (
    <>
      <EventList events={events} />
    </>
  );
};

export default HomeContainer;
