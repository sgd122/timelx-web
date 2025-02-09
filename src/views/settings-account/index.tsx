import { useRouter } from 'next/router';
import { signOut } from 'next-auth/react';

import { logUserEvent } from '@/app/utils/firebase';
import { useToaster } from '@/shared/hooks/useToaster';
import ConfirmDialog from '@/shared/ui/ConfirmDialog';
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
      onClick: () => undefined,
      render: (
        <ConfirmDialog
          title="회원탈퇴"
          description="모든 데이터가 삭제되며, 복구 할 수 없습니다."
          confirmLabel="탈퇴"
          confirmColor="red"
          onConfirm={() => {
            toaster.success('개발 진행중입니다.');
          }}
          trigger={<span>회원탈퇴</span>}
        />
      ),
    },
  ];

  return <ListView items={ITEMS} />;
};

export default AccountContainer;
