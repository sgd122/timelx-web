import Image from 'next/image';

import FavoriteButton from '@/components/ui/FavoriteButton';
import { handleFavoriteToggle } from '@/services/favoriteService';
import { EVENT_DETAILS } from '@/views/event/dummy';

const EventImage = () => {
  const { id, favorite, image } = EVENT_DETAILS;

  const refetchPostList = async () => {
    console.log('refetchPostList');
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
        <FavoriteButton
          postId={id}
          favorite={favorite}
          onFavoriteToggle={(newFavorite, postId) =>
            handleFavoriteToggle(newFavorite, postId, refetchPostList)
          }
        />
      </div>
    </div>
  );
};

export default EventImage;
