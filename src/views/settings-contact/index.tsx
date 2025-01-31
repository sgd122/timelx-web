import toast from 'react-hot-toast';
import { FaLink } from 'react-icons/fa';
import { IoCopySharp } from 'react-icons/io5';

import ListView from '@/shared/ui/ListView';
import { copyToClipboard } from '@/shared/utils/copyToClipboard';

const ContactContainer = () => {
  const ITEMS = [
    {
      label: 'timelx 팀 이메일\n' + 'timelx@gmail.com',
      onClick: async () => {
        try {
          await copyToClipboard('timelx@gmail.com');
          toast.success('timelx 팀 이메일이 클립보드에 복사되었습니다.');
        } catch {
          toast.error('클립보드 복사에 실패했습니다.');
        }
      },
      icon: <IoCopySharp size={16} />,
    },
    {
      label: 'timelx 홈페이지 바로가기',
      href: 'https://gmail.com',
      icon: <FaLink size={16} />,
    },
  ];

  return (
    <>
      <ListView items={ITEMS} />
    </>
  );
};

export default ContactContainer;
