import { Button } from '@radix-ui/themes';
import Image from 'next/image';
import Link from 'next/link';

import LogoTitle from '@/assets/icon/title.png';

const LeftContainer = () => {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen py-10">
      {/* Header */}
      <div className="flex items-center text-center">
        <Image src={LogoTitle} alt={'logo'} height={20} />
        <span className="text-sm font-semibold tracking-wide">타임렉스</span>
        <span className="bg-gray-700 text-xs rounded-full px-2 py-1 ml-2">
          베타
        </span>
      </div>

      {/* Main Content */}
      <main className="mt-12 text-center">
        <p className="text-lg font-medium">AI time search engine</p>
        <span className="text-5xl font-bold leading-tight mt-2">
          시간을 밝혀다<span className="text-yellow-500">.</span>
        </span>

        {/* Filters */}
        <div className="flex justify-center gap-4 mt-8">
          <div className="flex items-center px-6 py-2 border border-gray-700 rounded-md bg-gray-800">
            <span className="text-gray-400">날짜 입력 :</span>
            <span className="ml-2 font-semibold text-white">날짜 선택</span>
          </div>
          <div className="flex items-center px-6 py-2 border border-gray-700 rounded-md bg-gray-800">
            <span className="text-gray-400">지역 입력 :</span>
            <span className="ml-2 font-semibold text-white">지역 선택</span>
          </div>
          <div className="flex items-center px-6 py-2 border border-gray-700 rounded-md bg-gray-800">
            <span className="text-gray-400">시간 선택 :</span>
            <span className="ml-2 font-semibold text-white">17:00 - 21:00</span>
          </div>
          <div className="flex items-center px-6 py-2 border border-gray-700 rounded-md bg-gray-800">
            <span className="text-gray-400">키워드 입력 :</span>
            <span className="ml-2 font-semibold text-white">
              특정 키워드 입력
            </span>
          </div>
          <Button variant="solid" className="bg-blue-500 hover:bg-blue-600">
            검색하기
          </Button>
        </div>

        {/* Subtext */}
        <p className="mt-6 text-gray-400">
          전국에서 <span className="text-white font-bold">1,241,213</span>{' '}
          시간이 밝게 빛나고 있습니다 ✨
        </p>
      </main>

      {/* Footer */}
      <div className="mt-12 text-center">
        <div className="flex justify-center gap-4">
          <Button variant="ghost" className="text-white">
            🧐 타임렉스 팀이 궁금하신가요?
          </Button>
          <Link href={'https://forms.gle/FTxscDvBVyaucoaeA'} target={'_blank'}>
            <Button variant="ghost" className="text-white">
              3초 만에 이벤트 제보하기
            </Button>
          </Link>
          <Button
            variant="solid"
            className="bg-yellow-500 hover:bg-yellow-600 text-black"
          >
            ⚡ 이벤트 등록하고 시간 밝히기
          </Button>
        </div>
        <div className="mt-8 text-gray-400">
          <span>Google</span> · <span>Gemini</span>
        </div>
      </div>
    </div>
  );
};

export default LeftContainer;
