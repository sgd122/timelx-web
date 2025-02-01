import type { NextRouter } from 'next/router';
import type { Dispatch, SetStateAction } from 'react';
import { BiLogIn } from 'react-icons/bi';
import { FaPlus } from 'react-icons/fa';
import { IoMdShareAlt } from 'react-icons/io';

import type { useToaster } from '@/shared/hooks/useToaster';
import { copyToClipboard } from '@/shared/utils/copyToClipboard';

type SetSubmitActionType = Dispatch<SetStateAction<boolean>>;

export const getLoginIcon = (router: NextRouter) => ({
  icon: (
    <>
      <span className="sr-only">로그인</span>
      <BiLogIn size="24" />
    </>
  ),
  action: () => router.push('/auth/login'),
  label: '로그인',
});

export const getRegisterIcon = (setSubmitAction: SetSubmitActionType) => ({
  icon: <span className="text-blue-200">등록</span>,
  action: () => setSubmitAction(true),
  label: '등록',
});

export const getShareIcon = (toaster: ReturnType<typeof useToaster>) => ({
  icon: (
    <>
      <span className="sr-only">공유하기</span>
      <IoMdShareAlt size="24" />
    </>
  ),
  action: async () => {
    try {
      await copyToClipboard(window.location.href);
      toaster.success('링크가 클립보드에 복사되었습니다.');
    } catch {
      toaster.error('클립보드 복사에 실패했습니다.');
    }
  },
  label: '공유하기',
});

export const getNewEventIcon = (router: NextRouter) => ({
  icon: (
    <>
      <span className="sr-only">새 이벤트 등록</span>
      <FaPlus size="24" />
    </>
  ),
  action: () => router.push('/event/new'),
  label: '새 이벤트 등록',
});
