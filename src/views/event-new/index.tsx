import EventServiceComponent from '@/widgets/EventServiceComponent';

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
