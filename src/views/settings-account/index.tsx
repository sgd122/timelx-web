import { useRouter } from 'next/router';
import { signOut } from 'next-auth/react';

import { logUserEvent } from '@/app/utils/firebase';
import { useToaster } from '@/shared/hooks/useToaster';
import ListView from '@/shared/ui/ListView';

const AccountContainer = () => {
  const router = useRouter();
  const toaster = useToaster();
  const ITEMS = [
    {
      label: '로그아웃',
      onClick: () => {
        logUserEvent();
        signOut({ redirect: false }).then(() => {
          router.push('/');
        });
      },
    },
    {
      label: '회원탈퇴',
      onClick: () => {
        toaster.success('개발 진행중입니다.');
      },
    },
  ];

  return <ListView items={ITEMS} />;
};

export default AccountContainer;
