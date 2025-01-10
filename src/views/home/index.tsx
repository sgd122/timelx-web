import { Button } from '@radix-ui/themes';
import Link from 'next/link';

import EventList from '@/components/ui/EventList';
import { events } from '@/views/home/dummy';

const HomeContainer = () => {
  return (
    <>
      <EventList events={events} />
      <Link href="/search">
        <Button>go search</Button>
      </Link>
    </>
  );
};

export default HomeContainer;
