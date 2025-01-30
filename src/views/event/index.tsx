import EventServiceComponent from '@/services/eventService/components';
import type { FormValues } from '@/services/eventService/types/form-values';
import { EVENT_DETAILS } from '@/views/event/dummy';

const EventEditContainer = () => {
  return (
    <EventServiceComponent
      data={EVENT_DETAILS as never as FormValues}
      isReadOnly={true}
    />
  );
};

export default EventEditContainer;
