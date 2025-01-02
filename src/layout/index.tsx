import { Box } from '@radix-ui/themes';
import type { PropsWithChildren } from 'react';

import { LAYOUT } from '@/constants/size';
import { LeftContainer, RightContainer } from '@/layout/styles';

const Layout = ({ children }: PropsWithChildren) => {
  const { maxWidth } = LAYOUT;
  return (
    <Box
      maxWidth={maxWidth}
      style={{
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <LeftContainer size="1" align={'left'}>
        test
      </LeftContainer>
      <RightContainer size="1">
        <Box
          style={{
            background: 'var(--gray-a2)',
            borderRadius: 'var(--radius-3)',
          }}
          minHeight={'100vh'}
        >
          {children}
        </Box>
      </RightContainer>
    </Box>
  );
};

export default Layout;
