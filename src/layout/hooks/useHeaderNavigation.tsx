import Link from 'next/link';
import { FaHome } from 'react-icons/fa';

import { useAppRouter } from '@/hooks/useAppRouter';
import Close from '@/layout/_components/Close';

export const useHeaderNavigation = () => {
  const router = useAppRouter();

  const shouldShowSettingsLink = router.pathname.startsWith('/settings');

  const getLeftComponent = () => {
    const pages = [
      '/event/new',
      '/event/[eventId]/edit',
      '/settings/account',
      '/settings/contact',
      '/settings/dashboard',
    ];

    if (pages.includes(router.pathname)) {
      return shouldShowSettingsLink ? <Close href="/settings" /> : <Close />;
    }

    return (
      <Link href="/">
        <FaHome size="24" />
      </Link>
    );
  };

  return { getLeftComponent };
};
