import EventServiceComponent from '@/services/eventServices/components';

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
