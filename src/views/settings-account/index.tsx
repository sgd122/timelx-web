import { signOut } from 'next-auth/react';
import toast from 'react-hot-toast';

import ListView from '@/components/ui/ListView';

const AccountContainer = () => {
  const ITEMS = [
    {
      label: '로그아웃',
      onClick: () => {
        signOut();
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
    <>
      <ListView items={ITEMS} />
    </>
  );
};

export default AccountContainer;
