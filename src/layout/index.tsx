import { Box, Container, ScrollArea } from '@radix-ui/themes';
import type { PropsWithChildren } from 'react';

import LeftContainer from '@/layout/_components/LeftContainer';
import Footer from '@/layout/footer';
import Header from '@/layout/header';

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
      <LeftContainer className="hidden max-layout:flex mx-14" />
      <Container
        size="1"
        className="flex items-center min-layout:items-start min-layout:w-[448px]"
      >
        <Box
          style={{
            background: 'var(--gray-a2)',
            borderRadius: 'var(--radius-3)',
            position: 'relative',
            overflow: 'hidden',
            height: '100vh',
          }}
          height={'100vh'}
        >
          <Header />
          <Box
            style={{
              height: 'calc(100vh - 128px)',
              overflow: 'hidden',
            }}
          >
            <ScrollArea type="hover" scrollbars="vertical">
              <Box className="mx-6 my-4">{children}</Box>
            </ScrollArea>
          </Box>
          <Footer />
        </Box>
      </Container>
    </Box>
  );
};

export default Layout;
