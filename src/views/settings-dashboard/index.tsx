import EventEditList from '@/features/event/ui/EventEditList';
import { events } from '@/views/home/dummy';

const DashboardContainer = () => {
  return <EventEditList events={events} />;
};

export default DashboardContainer;
