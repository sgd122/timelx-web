import { Flex } from '@radix-ui/themes';
import Image from 'next/image';
import Link from 'next/link';
import { FaHome, FaPlus } from 'react-icons/fa';

import LogoTitle from '@/assets/icon/title.png';

const Header = () => {
  return (
    <Flex
      className={'mx-7'}
      justify={'between'}
      height={'56px'}
      align={'center'}
    >
      <Link href="/">
        <FaHome size={'24'} />
      </Link>
      <Image src={LogoTitle} alt={'logo'} height={24} />
      <FaPlus size={'24'} />
    </Flex>
  );
};

export default Header;
