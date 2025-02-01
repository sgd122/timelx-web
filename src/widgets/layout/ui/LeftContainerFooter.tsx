import Link from 'next/link';

import Button from '@/shared/ui/Button';

const LeftContainerFooter = () => (
  <div className="mt-12 text-center">
    <div className="flex justify-center gap-4">
      <Button
        variant="soft"
        color="gray"
        className="text-gray-900 font-bold bg-white hover:bg-gray-200"
      >
        🧐 타임럭스 팀이 궁금하신가요?
      </Button>
      <Link href="https://forms.gle/FTxscDvBVyaucoaeA" target="_blank">
        <Button
          variant="soft"
          color="gray"
          className="text-gray-900 font-bold bg-white hover:bg-gray-200"
        >
          3초 만에 이벤트 제보하기
        </Button>
      </Link>
      <Button
        variant="solid"
        className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold"
      >
        🔥 이벤트 등록하고 시간 밝히기
      </Button>
    </div>
  </div>
);

export default LeftContainerFooter;
