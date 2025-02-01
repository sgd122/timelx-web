import { Box, Container } from '@radix-ui/themes';
import type { PropsWithChildren } from 'react';

import useViewportHeight from '@/shared/hooks/useViewportHeight';
import { ScrollAreaProvider } from '@/shared/providers/ScrollAreaProvider';
import FloatingSearchButton from '@/shared/ui/FloatingSearchButton';
import Footer from '@/widgets/Footer';
import Header from '@/widgets/Header';

const MainContainer = ({ children }: PropsWithChildren) => {
  const viewportHeight = useViewportHeight();
  return (
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
  );
};

export default MainContainer;
