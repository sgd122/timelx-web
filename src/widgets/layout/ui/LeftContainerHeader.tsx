import Image from 'next/image';
import Link from 'next/link';

import LogoTitle from '@/shared/assets/icon/title.png';

const LeftContainerHeader = () => (
  <Link href="/">
    <div className="flex items-center text-center">
      <Image src={LogoTitle} alt="logo" height={20} />
      <span className="text-md font-semibold tracking-wide">타임럭스</span>
      <span className="bg-gray-700 text-xs rounded-full px-2 py-1 ml-2">
        Beta
      </span>
    </div>
  </Link>
);

export default LeftContainerHeader;
