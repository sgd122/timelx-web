import { PAGE_TITLE } from '@/shared/constants/title';
import { LogScreen } from '@/shared/ui/LogScreen';
import SavedContainer from '@/views/saved';

const Saved = () => {
  return (
    <LogScreen params={{ title: PAGE_TITLE.SAVED }}>
      <SavedContainer />
    </LogScreen>
  );
};

export default Saved;
