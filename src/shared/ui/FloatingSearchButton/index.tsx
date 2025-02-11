import { Tooltip } from '@radix-ui/themes';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';

import { useAppRouter } from '@/shared/hooks/useAppRouter';
import Button from '@/shared/ui/Button';

const FloatingSearchButton = () => {
  const router = useAppRouter();

  const hiddenClass = ['/', '/search/result'].includes(router.pathname)
    ? ''
    : 'hidden';

  return (
    <div className={`absolute bottom-6 right-6 ${hiddenClass}`}>
      <Tooltip content="검색하기">
        <Button
          asChild={true}
          variant="solid"
          color="yellow"
          size="2"
          radius="full"
          className="w-[48px] h-[48px]"
          onClick={() => console.log('Search button clicked!')}
          aria-label="Search"
        >
          <Link href="/search">
            <>
              <span className="sr-only">검색</span>
              <FaSearch size={24} />
            </>
          </Link>
        </Button>
      </Tooltip>
    </div>
  );
};

export default FloatingSearchButton;
