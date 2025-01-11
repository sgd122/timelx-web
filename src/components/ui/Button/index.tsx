import type { ButtonProps as RadixButtonProps } from '@radix-ui/themes';
import { Button as RadixButton } from '@radix-ui/themes';
import { motion } from 'framer-motion';
import type { ComponentProps } from 'react';

type ButtonProps = RadixButtonProps &
  Omit<ComponentProps<typeof motion.div>, 'ref'>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  const MotionButton = motion(RadixButton);

  return (
    <MotionButton
      asChild={true}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 200, damping: 10 }}
      {...rest}
    >
      {children}
    </MotionButton>
  );
};

export default Button;
