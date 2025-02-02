import EventList from '@/features/event/ui/EventList';
import { events } from '@/views/search-result/dummy';

const SavedContainer = () => {
  return (
    <>
      <EventList events={events} />
    </>
  );
};

export default SavedContainer;
