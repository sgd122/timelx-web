import { PAGE_TITLE } from '@/shared/constants/title';
import { LogScreen } from '@/shared/ui/LogScreen';
import EventContainer from '@/views/event';

const EventPage = () => {
  return (
    <LogScreen params={{ title: PAGE_TITLE.EVENT }}>
      <EventContainer />
    </LogScreen>
  );
};

export default EventPage;
