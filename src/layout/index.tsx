import { Box, Container } from '@radix-ui/themes';
import type { PropsWithChildren } from 'react';

import LeftContainer from '@/layout/_components/LeftContainer';
import Footer from '@/layout/footer';
import Header from '@/layout/header';
import FramerMotion from '@/widgets/FramerMotion';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Box
      maxWidth={'1536px'}
      style={{
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div className="hidden max-layout:block mx-14">
        <LeftContainer />
      </div>
      <Container
        size="1"
        className="flex items-center min-layout:items-start  min-layout:w-[448px]"
      >
        <Box
          style={{
            background: 'var(--gray-a2)',
            borderRadius: 'var(--radius-3)',
            position: 'relative',
          }}
          minHeight={'100vh'}
        >
          <Header />
          <FramerMotion>{children}</FramerMotion>
          <Footer />
        </Box>
      </Container>
    </Box>
  );
};

export default Layout;
