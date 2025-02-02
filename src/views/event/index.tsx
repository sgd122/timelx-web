import type { FormValues } from '@/features/event/types/form-values';
import { EVENT_DETAILS } from '@/views/event/dummy';
import EventServiceComponent from '@/widgets/EventServiceComponent';

const EventContainer = () => {
  return (
    <>
      <h2 className="sr-only">이벤트 상세</h2>
      <EventServiceComponent
        data={EVENT_DETAILS as never as FormValues}
        isReadOnly={true}
      />
    </>
  );
};

export default EventContainer;
