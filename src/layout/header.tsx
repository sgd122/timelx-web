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
import Close from '@/layout/_components/Close';
import { submitActionAtom } from '@/store/submitActionAtom';

// 경로별 제목 정의
const pageTitles: Record<string, string> = {
  '/event/new': '이벤트 등록',
  '/saved': '저장한 이벤트',
};

const Header = () => {
  const router = useRouter();
  const session = useSession();
  const setSubmitAction = useSetAtom(submitActionAtom);

  // 현재 경로가 pageTitles에 포함되는지 확인
  const isPageName = Object.prototype.hasOwnProperty.call(
    pageTitles,
    router.pathname
  );

  // 로그인 아이콘
  const getLoginIcon = () => ({
    icon: <BiLogIn size="24" />,
    action: () => router.push('/auth/login'),
    label: '로그인',
  });

  // 등록 아이콘
  const getRegisterIcon = () => ({
    icon: <Text className="text-blue-200">등록</Text>,
    action: () => setSubmitAction(true),
    label: '등록',
  });

  // 공유 아이콘
  const getShareIcon = () => ({
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
      <Close />
    ) : (
      <Link href="/">
        <FaHome size="24" />
      </Link>
    );
  };

  const RightComponent = () => {
    // 새 이벤트 등록 아이콘
    const getNewEventIcon = () => ({
      icon: <FaPlus size="24" />,
      action: () => router.push('/event/new'),
      label: '새 이벤트 등록',
    });

    // 경로에 따라 적절한 아이콘 반환
    const getIconAndAction = () => {
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
    <header>
      <Flex className="mx-6" justify="between" height="56px" align="center">
        <LeftComponent />

        <h1 className={isPageName ? 'sr-only' : ''}>
          <Image src={LogoTitle} alt="timelx" height={24} />
        </h1>

        {/* MiddleTitleName 대신 바로 출력 */}
        {isPageName && (
          <h2>
            <Text size="5" weight="bold">
              {pageTitles[router.pathname]}
            </Text>
          </h2>
        )}

        <RightComponent />
      </Flex>
    </header>
  );
};

export default Header;
