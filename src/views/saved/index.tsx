import EventList from '@/shared/ui/EventList';
import { events } from '@/views/search-result/dummy';

const SavedContainer = () => {
  return <EventList events={events} />;
};

export default SavedContainer;
