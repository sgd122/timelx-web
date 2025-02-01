import type React from 'react';

import { cn } from '@/shared/lib/utils';
import LeftContainerFooter from '@/widgets/layout/ui/LeftContainerFooter';
import LeftContainerHeader from '@/widgets/layout/ui/LeftContainerHeader';
import LeftContainerMain from '@/widgets/layout/ui/LeftContainerMain';

interface LeftContainerProps {
  className?: string;
}

const LeftContainer: React.FC<LeftContainerProps> = ({ className }) => (
  <div
    className={cn(
      'flex flex-col justify-between min-h-screen py-10',
      className
    )}
  >
    <LeftContainerHeader />
    <LeftContainerMain />
    <LeftContainerFooter />
  </div>
);

export default LeftContainer;
