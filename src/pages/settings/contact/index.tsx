import { PAGE_TITLE } from '@/shared/constants/title';
import { LogScreen } from '@/shared/ui/LogScreen';
import ContactContainer from '@/views/settings-contact';

const Contact = () => {
  return (
    <LogScreen params={{ title: PAGE_TITLE.SETTINGS_CONTACT }}>
      <ContactContainer />
    </LogScreen>
  );
};

export default Contact;
