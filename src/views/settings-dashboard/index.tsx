import { PAGE_TITLE } from '@/shared/constants/title';
import EventEditList from '@/shared/ui/EventEditList';
import { LogScreen } from '@/shared/ui/LogScreen';
import { events } from '@/views/home/dummy';

const DashboardContainer = () => {
  return (
    <LogScreen params={{ title: PAGE_TITLE.SETTINGS_DASHBOARD }}>
      <EventEditList events={events} />
    </LogScreen>
  );
};

export default DashboardContainer;
