import type { NextRouter } from 'next/router';
import type { Dispatch, SetStateAction } from 'react';
import toast from 'react-hot-toast';
import { BiLogIn } from 'react-icons/bi';
import { FaPlus } from 'react-icons/fa';
import { IoMdShareAlt } from 'react-icons/io';

type SetSubmitActionType = Dispatch<SetStateAction<boolean>>;

export const getLoginIcon = (router: NextRouter) => ({
  icon: <BiLogIn size="24" />,
  action: () => router.push('/auth/login'),
  label: '로그인',
});

export const getRegisterIcon = (setSubmitAction: SetSubmitActionType) => ({
  icon: <span className="text-blue-200">등록</span>,
  action: () => setSubmitAction(true),
  label: '등록',
});

export const getShareIcon = () => ({
  icon: <IoMdShareAlt size="24" />,
  action: () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        toast.success('링크가 클립보드에 복사되었습니다.');
      })
      .catch(() => {
        toast.error('클립보드 복사에 실패했습니다.');
      });
  },
  label: '공유하기',
});

export const getNewEventIcon = (router: NextRouter) => ({
  icon: <FaPlus size="24" />,
  action: () => router.push('/event/new'),
  label: '새 이벤트 등록',
});
