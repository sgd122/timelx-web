import { PAGE_TITLE } from '@/shared/constants/title';
import { LogScreen } from '@/shared/ui/LogScreen';
import AccountContainer from '@/views/settings-account';

const AccountPage = () => {
  return (
    <LogScreen params={{ title: PAGE_TITLE.SETTINGS_ACCOUNT }}>
      <AccountContainer />
    </LogScreen>
  );
};

export default AccountPage;
