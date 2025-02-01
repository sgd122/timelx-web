import { PAGE_TITLE } from '@/shared/constants/title';
import { LogScreen } from '@/shared/ui/LogScreen';
import EventNewContainer from '@/views/event-new';

const EventNew = () => {
  return (
    <LogScreen params={{ title: PAGE_TITLE.EVENT_REGISTER }}>
      <EventNewContainer />
    </LogScreen>
  );
};

export default EventNew;
