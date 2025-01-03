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
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container size="1" align={'left'} className="hidden max-layout:block">
        test
      </Container>
      <Container size="1" className="flex items-center min-layout:items-end">
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
