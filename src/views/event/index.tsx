import EventServiceComponent from '@/features/event/components';
import type { FormValues } from '@/features/event/types/form-values';
import { PAGE_TITLE } from '@/shared/constants/title';
import { LogScreen } from '@/shared/ui/LogScreen';
import { EVENT_DETAILS } from '@/views/event/dummy';

const EventContainer = () => {
  return (
    <LogScreen params={{ title: PAGE_TITLE.EVENT }}>
      <EventServiceComponent
        data={EVENT_DETAILS as never as FormValues}
        isReadOnly={true}
      />
    </LogScreen>
  );
};

export default EventContainer;
