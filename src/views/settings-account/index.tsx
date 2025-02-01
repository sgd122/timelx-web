import { useRouter } from 'next/router';
import { signOut } from 'next-auth/react';
import toast from 'react-hot-toast';

import { PAGE_TITLE } from '@/shared/constants/title';
import ListView from '@/shared/ui/ListView';
import { LogScreen } from '@/shared/ui/LogScreen';

const AccountContainer = () => {
  const router = useRouter();
  const ITEMS = [
    {
      label: '로그아웃',
      onClick: () => {
        signOut({ redirect: false }).then(() => {
          router.push('/');
        });
      },
    },
    {
      label: '회원탈퇴',
      onClick: () => {
        toast.success('개발 진행중입니다.');
      },
    },
  ];

  return (
    <LogScreen params={{ title: PAGE_TITLE.SETTINGS_ACCOUNT }}>
      <ListView items={ITEMS} />
    </LogScreen>
  );
};

export default AccountContainer;
