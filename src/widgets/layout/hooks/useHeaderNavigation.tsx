import Link from 'next/link';
import { FaHome } from 'react-icons/fa';

import { useAppRouter } from '@/shared/hooks/useAppRouter';
import Close from '@/widgets/layout/ui/Close';

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
      <Link href="/public">
        <FaHome size="24" />
      </Link>
    );
  };

  return { getLeftComponent };
};
