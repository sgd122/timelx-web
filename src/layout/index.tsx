import { Box, Container } from '@radix-ui/themes';
import type { PropsWithChildren } from 'react';

import { LAYOUT } from '@/constants/size';

const Layout = ({ children }: PropsWithChildren) => {
  const { maxWidth } = LAYOUT;
  return (
    <Box
      maxWidth={maxWidth}
      style={{
        margin: '0 auto',
      }}
    >
      <Container size="1" align={'right'}>
        <Box
          style={{
            background: 'var(--gray-a2)',
            borderRadius: 'var(--radius-3)',
          }}
          minHeight={'100vh'}
        >
          {children}
        </Box>
      </Container>
    </Box>
  );
};

export default Layout;
