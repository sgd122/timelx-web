import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import type { PropsWithChildren } from 'react';
import { useEffect, useState } from 'react';

const FramerMotion = ({ children }: PropsWithChildren) => {
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setIsFirstLoad(false);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.pathname}
        initial={isFirstLoad ? false : { x: '100%' }} // 처음 로드 시 애니메이션 생략
        animate={{ x: 0 }}
        exit={{ x: '-100%' }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default FramerMotion;
