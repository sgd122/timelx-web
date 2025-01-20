import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaHome } from 'react-icons/fa';

import Close from '@/layout/_components/Close';

export const useHeaderNavigation = () => {
  const router = useRouter();

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
