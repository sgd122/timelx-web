import { Box, Text } from '@radix-ui/themes';
import { useSession } from 'next-auth/react';

import Avatar from '@/components/ui/Avatar';
import ListView from '@/components/ui/ListView';
import { ITEMS } from '@/views/settings/contants/items';

const SettingContainer = () => {
  const session = useSession();
  const { email, name, imageUrl } = session?.data?.user || {};

  return (
    <>
      <Box className="flex flex-col justify-center items-center gap-4">
        <Avatar
          src={imageUrl}
          isEditing={true}
          onClick={(image) => console.log('선택된 이미지:', image)}
        />
        <Box className="flex flex-col justify-center items-center">
          <Text>{name}</Text>
          <Text size="1">{email}</Text>
        </Box>
      </Box>

      <Box className="mt-6">
        <ListView items={ITEMS} />
      </Box>
    </>
  );
};

export default SettingContainer;
