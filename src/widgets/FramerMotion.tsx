import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import type { PropsWithChildren } from 'react';

const FramerMotion = ({ children }: PropsWithChildren) => {
  const router = useRouter();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={router.pathname}
        initial={{ x: '100%' }} // 들어오는 페이지: 오른쪽에서 시작
        animate={{ x: 0 }} // 중앙으로 이동
        exit={{ x: '-100%' }} // 나가는 페이지: 왼쪽으로 나감
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default FramerMotion;
