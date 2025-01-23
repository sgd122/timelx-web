import { Box, Container, ScrollArea } from '@radix-ui/themes';
import type { PropsWithChildren } from 'react';

import FloatingSearchButton from '@/components/ui/FloatingSearchButton';
import useViewportHeight from '@/hooks/useViewportHeight';
import LeftContainer from '@/layout/_components/LeftContainer';
import Footer from '@/layout/footer';
import Header from '@/layout/header';

const Layout = ({ children }: PropsWithChildren) => {
  const viewportHeight = useViewportHeight();

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
            position: 'relative',
            overflow: 'hidden',
            height: viewportHeight,
            display: 'flex',
            flexDirection: 'column',
            paddingBottom: '16px',
          }}
        >
          <Header />
          <Box className="flex-1 overflow-y-hidden">
            <ScrollArea type="hover" scrollbars="vertical">
              <Box className="px-6 pb-4">{children}</Box>
              <FloatingSearchButton />
            </ScrollArea>
          </Box>
          <Footer />
        </Box>
      </Container>
    </Box>
  );
};

export default Layout;
