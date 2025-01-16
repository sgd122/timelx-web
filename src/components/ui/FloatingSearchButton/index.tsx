import { Button, Tooltip } from '@radix-ui/themes';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaSearch } from 'react-icons/fa';

const FloatingSearchButton = () => {
  const router = useRouter();

  const hiddenClass = router.pathname === '/search' ? 'hidden' : '';

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
            <FaSearch size={24} />
          </Link>
        </Button>
      </Tooltip>
    </div>
  );
};

export default FloatingSearchButton;
