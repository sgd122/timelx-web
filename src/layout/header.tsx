import { Button, Flex, Text } from '@radix-ui/themes';
import { useSetAtom } from 'jotai';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import toast from 'react-hot-toast';
import { BiLogIn } from 'react-icons/bi';
import { FaHome, FaPlus } from 'react-icons/fa';
import { IoMdShareAlt } from 'react-icons/io';

import LogoTitle from '@/assets/icon/title.png';
import CloseDialog from '@/layout/_components/CloseDialog';
import { submitActionAtom } from '@/store/submitActionAtom';

// 타입 정의
interface IconAction {
  icon: React.ReactNode;
  action: () => void | Promise<void | boolean>;
  label: string;
}

const Header = () => {
  const router = useRouter();
  const session = useSession();
  const setSubmitAction = useSetAtom(submitActionAtom);
  const isPageName = router.pathname === '/event/new';

  // 로그인 아이콘
  const getLoginIcon = (): IconAction => ({
    icon: <BiLogIn size="24" />,
    action: () => router.push('/auth/login'),
    label: '로그인',
  });

  // 등록 아이콘
  const getRegisterIcon = (): IconAction => ({
    icon: <Text className="text-blue-200">등록</Text>,
    action: () => setSubmitAction(true),
    label: '등록',
  });

  // 공유 아이콘
  const getShareIcon = (): IconAction => ({
    icon: <IoMdShareAlt size="24" />,
    action: async () => {
      try {
        await navigator.clipboard.writeText(window.location.href);
        toast.success('링크가 클립보드에 복사되었습니다.');
      } catch {
        toast.error('클립보드 복사에 실패했습니다.');
      }
    },
    label: '공유하기',
  });

  const LeftComponent = () => {
    return router.pathname === '/event/new' ? (
      <CloseDialog />
    ) : (
      <Link href="/">
        <FaHome size="24" />
      </Link>
    );
  };

  const RightComponent = () => {
    // 새 이벤트 등록 아이콘
    const getNewEventIcon = (): IconAction => ({
      icon: <FaPlus size="24" />,
      action: () => router.push('/event/new'),
      label: '새 이벤트 등록',
    });

    // 경로에 따라 적절한 아이콘 반환
    const getIconAndAction = (): IconAction => {
      if (session.status === 'unauthenticated') return getLoginIcon();
      if (router.pathname === '/event/new') return getRegisterIcon();
      if (router.pathname === '/event/[eventId]') return getShareIcon();
      return getNewEventIcon();
    };

    const { icon, action, label } = getIconAndAction();

    return (
      <Button
        onClick={action}
        className="bg-transparent border-none cursor-pointer"
        aria-label={label}
      >
        {icon}
      </Button>
    );
  };

  return (
    <Flex className="mx-6" justify="between" height="56px" align="center">
      <LeftComponent />

      <h1 className={isPageName ? 'sr-only' : ''}>
        <Image src={LogoTitle} alt="timelx" height={24} />
      </h1>

      {isPageName && (
        <h2>
          {/* TODO: isPageName 인 경우 페이지경로에 따라서 적절한 페이지명으로 나오게 기능 추가 필요 */}
          <Text size="5" weight="bold">
            이벤트 등록
          </Text>
        </h2>
      )}

      <RightComponent />
    </Flex>
  );
};

export default Header;
