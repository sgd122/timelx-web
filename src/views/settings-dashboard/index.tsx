import EventEditList from '@/shared/ui/EventEditList';
import { events } from '@/views/home/dummy';

const DashboardContainer = () => {
  return <EventEditList events={events} />;
};

export default DashboardContainer;
