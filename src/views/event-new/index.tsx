import EventServiceComponent from '@/features/event/components';
import { PAGE_TITLE } from '@/shared/constants/title';
import { LogScreen } from '@/shared/ui/LogScreen';

const EventNewContainer = () => {
  return (
    <LogScreen params={{ title: PAGE_TITLE.EVENT_REGISTER }}>
      <EventServiceComponent
        onSubmit={(data) => {
          console.log('Form submitted:', data);
        }}
      />
    </LogScreen>
  );
};

export default EventNewContainer;
