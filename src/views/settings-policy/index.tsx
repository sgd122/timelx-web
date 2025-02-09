import { FaLink } from 'react-icons/fa';

import ListView from '@/shared/ui/ListView';

const PolicyContainer = () => {
  const ITEMS = [
    {
      label: '서비스 이용약관',
      href: 'https://timelx.gitbook.io/home/info/terms-of-use',
      icon: <FaLink size={16} />,
    },
    {
      label: '서비스 이용강령',
      href: 'https://timelx.gitbook.io/home/info/code-of-conduct',
      icon: <FaLink size={16} />,
    },
    {
      label: '개인정보 처리방침',
      href: 'https://timelx.gitbook.io/home/info/privacy-policy',
      icon: <FaLink size={16} />,
    },
  ];

  return <ListView items={ITEMS} />;
};

export default PolicyContainer;
