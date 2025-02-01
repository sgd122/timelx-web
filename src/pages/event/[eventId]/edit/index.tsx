import { PAGE_TITLE } from '@/shared/constants/title';
import { LogScreen } from '@/shared/ui/LogScreen';
import EventEditContainer from '@/views/event-edit';

const EventPage = () => {
  return (
    <LogScreen params={{ title: PAGE_TITLE.EVENT_EDIT }}>
      <EventEditContainer />
    </LogScreen>
  );
};

export default EventPage;
