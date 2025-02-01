import EventServiceComponent from '@/features/event/components';
import type { FormValues } from '@/features/event/types/form-values';
import { EVENT_DETAILS } from '@/views/event/dummy';

const EventContainer = () => {
  return (
    <EventServiceComponent
      data={EVENT_DETAILS as never as FormValues}
      isReadOnly={true}
    />
  );
};

export default EventContainer;
