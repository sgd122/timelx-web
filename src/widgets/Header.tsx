import { Flex, Text } from '@radix-ui/themes';
import { useSetAtom } from 'jotai';
import Image from 'next/image';

import LogoTitle from '@/shared/assets/icon/title.png';
import { useAppRouter } from '@/shared/hooks/useAppRouter';
import { useToaster } from '@/shared/hooks/useToaster';
import { useUserSession } from '@/shared/hooks/useUserSession';
import { submitActionAtom } from '@/shared/store/submitActionAtom';
import Button from '@/shared/ui/Button';
import { pageTitles } from '@/widgets/layout/constants/headerTitles';
import { useHeaderNavigation } from '@/widgets/layout/hooks/useHeaderNavigation';
import {
  getLoginIcon,
  getNewEventIcon,
  getRegisterIcon,
  getShareIcon,
} from '@/widgets/layout/utils/headerIcons';

interface IconAction {
  icon: React.ReactNode;
  action: () => void;
  label: string;
}

const Header = () => {
  const router = useAppRouter();
  const { isUnAuthenticated } = useUserSession();
  const setSubmitAction = useSetAtom(submitActionAtom);

  const { getLeftComponent } = useHeaderNavigation();

  const isPageName = Object.prototype.hasOwnProperty.call(
    pageTitles,
    router.pathname
  );

  const getIconAndAction = (): IconAction => {
    const isRegisterPage = ['/event/new', '/event/[eventId]/edit'].includes(
      router.pathname
    );
    const isEventDetailPage = router.pathname === '/event/[eventId]';
    const toaster = useToaster();

    if (isUnAuthenticated) {
      return getLoginIcon(router);
    }

    if (isRegisterPage) {
      return getRegisterIcon(setSubmitAction);
    }

    if (isEventDetailPage) {
      return getShareIcon(toaster);
    }

    return getNewEventIcon(router);
  };

  const { icon, action, label } = getIconAndAction();

  return (
    <header>
      <Flex className="mx-6" justify="between" height="56px" align="center">
        {getLeftComponent()}
        <h1 className={isPageName ? 'sr-only' : ''}>
          <Image src={LogoTitle} alt="timelx" height={24} />
        </h1>
        {isPageName && (
          <h2>
            <Text size="5" weight="bold">
              {pageTitles[router.pathname]}
            </Text>
          </h2>
        )}
        <Button
          onClick={action}
          className="bg-transparent border-none cursor-pointer"
          aria-label={label}
        >
          {icon}
        </Button>
      </Flex>
    </header>
  );
};

export default Header;
