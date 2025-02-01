import { PAGE_TITLE } from '@/shared/constants/title';
import { LogScreen } from '@/shared/ui/LogScreen';
import SettingContainer from '@/views/settings';

const Settings = () => {
  return (
    <LogScreen params={{ title: PAGE_TITLE.SETTINGS }}>
      <SettingContainer />
    </LogScreen>
  );
};

export default Settings;
