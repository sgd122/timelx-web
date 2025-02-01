import EventServiceComponent from '@/features/event/components';

const EventNewContainer = () => {
  return (
    <EventServiceComponent
      onSubmit={(data) => {
        console.log('Form submitted:', data);
      }}
    />
  );
};

export default EventNewContainer;
