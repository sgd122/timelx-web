import type { ButtonProps as RadixButtonProps } from '@radix-ui/themes';
import { Button as RadixButton } from '@radix-ui/themes';
import { motion } from 'framer-motion';
import type { ComponentProps } from 'react';

type ButtonProps = RadixButtonProps &
  Omit<ComponentProps<typeof motion.div>, 'ref'>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  const MotionButton = motion.create(RadixButton);

  return <MotionButton {...rest}>{children}</MotionButton>;
};

export default Button;
