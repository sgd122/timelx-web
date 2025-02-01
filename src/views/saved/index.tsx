import { PAGE_TITLE } from '@/shared/constants/title';
import EventList from '@/shared/ui/EventList';
import { LogScreen } from '@/shared/ui/LogScreen';
import { events } from '@/views/search-result/dummy';

const SavedContainer = () => {
  return (
    <LogScreen params={{ title: PAGE_TITLE.SAVED }}>
      <EventList events={events} />
    </LogScreen>
  );
};

export default SavedContainer;
