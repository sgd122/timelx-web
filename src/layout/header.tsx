import { Flex } from '@radix-ui/themes';
import Image from 'next/image';
import Link from 'next/link';
import { FaHome, FaPlus } from 'react-icons/fa';

import LogoTitle from '@/assets/icon/title.png';

const Header = () => {
  return (
    <Flex
      className={'mx-6'}
      justify={'between'}
      height={'56px'}
      align={'center'}
    >
      <Link href="/">
        <FaHome size={'24'} />
      </Link>
      <h1>
        <Image src={LogoTitle} alt={'timelx'} height={24} />
      </h1>
      <Link href="/event/new">
        <FaPlus size={'24'} />
      </Link>
    </Flex>
  );
};

export default Header;
