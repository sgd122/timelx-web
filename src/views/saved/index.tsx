import EventList from '@/components/ui/EventList';
import { events } from '@/views/search-result/dummy';

const SavedContainer = () => {
  return (
    <>
      <EventList events={events} />
    </>
  );
};

export default SavedContainer;
