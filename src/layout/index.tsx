import { Box, Container } from '@radix-ui/themes';
import type { PropsWithChildren } from 'react';

import useViewportHeight from '@/shared/hooks/useViewportHeight';
import { ScrollAreaProvider } from '@/shared/providers/ScrollAreaProvider';
import FloatingSearchButton from '@/shared/ui/FloatingSearchButton';
import Footer from '@/widgets/Footer';
import Header from '@/widgets/Header';
import LeftContainer from '@/widgets/layout/ui/LeftContainer';

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
            <ScrollAreaProvider>
              <Box className="px-6 pb-4">{children}</Box>
              <FloatingSearchButton />
            </ScrollAreaProvider>
          </Box>
          <Footer />
        </Box>
      </Container>
    </Box>
  );
};

export default Layout;
