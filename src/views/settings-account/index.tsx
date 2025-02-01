import { useRouter } from 'next/router';
import { signOut } from 'next-auth/react';

import { PAGE_TITLE } from '@/shared/constants/title';
import { useToaster } from '@/shared/hooks/useToaster';
import ListView from '@/shared/ui/ListView';
import { LogScreen } from '@/shared/ui/LogScreen';

const AccountContainer = () => {
  return (
    <LogScreen params={{ title: PAGE_TITLE.SETTINGS_ACCOUNT }}>
      <AccountList />
    </LogScreen>
  );
};

const AccountList = () => {
  const router = useRouter();
  const toaster = useToaster();
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
        toaster.success('개발 진행중입니다.');
      },
    },
  ];

  return <ListView items={ITEMS} />;
};

export default AccountContainer;
