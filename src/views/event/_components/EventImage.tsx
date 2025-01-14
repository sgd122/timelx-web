import Image from 'next/image';
import type React from 'react';
import { useState } from 'react';

import FavoriteButton from '@/components/ui/FavoriteButton';

const EventImage = ({ image }: { image: string }) => {
  const [favorite, setFavorite] = useState(false);

  const handleToggle = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setFavorite(!favorite);
  };

  return (
    <div className="h-auto max-h-96 -mx-6 [width:calc(100%_+_48px)] relative">
      <Image
        src={image}
        alt="event"
        layout="responsive"
        width={16}
        height={9}
      />
      <div className="absolute top-2 right-2">
        <FavoriteButton handleToggle={handleToggle} favorite={favorite} />
      </div>
    </div>
  );
};

export default EventImage;
