import { Box } from '@radix-ui/themes';
import type { PropsWithChildren } from 'react';

import useTrackUserEvent from '@/shared/hooks/useTrackUserEvent';
import LeftContainer from '@/widgets/LeftContainer';
import MainContainer from '@/widgets/MainContainer';

const Layout = ({ children }: PropsWithChildren) => {
  useTrackUserEvent();

  return (
    <Box
      maxWidth={'1536px'}
      style={{
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <LeftContainer className="hidden max-layout:flex mx-14" />
      <MainContainer>{children}</MainContainer>
    </Box>
  );
};

export default Layout;
