import { PAGE_TITLE } from '@/shared/constants/title';
import { LogScreen } from '@/shared/ui/LogScreen';
import DashboardContainer from '@/views/settings-dashboard';

const DashboardPage = () => {
  return (
    <LogScreen params={{ title: PAGE_TITLE.SETTINGS_DASHBOARD }}>
      <DashboardContainer />
    </LogScreen>
  );
};

export default DashboardPage;
