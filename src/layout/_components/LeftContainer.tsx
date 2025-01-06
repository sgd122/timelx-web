import { Box, Button, TextField } from '@radix-ui/themes';
import Image from 'next/image';
import Link from 'next/link';

import Gemini from '@/assets/icon/gemini.png';
import LogoTitle from '@/assets/icon/title.png';
import ChipListInput from '@/components/ui/ChipListInput';

const LeftContainer = () => {
  const fields = [
    {
      id: 'date',
      label: '날짜 선택',
      placeholder: '날짜 입력',
      isRequired: true,
      component: 'TextField',
    },
    {
      id: 'location',
      label: '지역 입력',
      placeholder: '지역 입력',
      isRequired: false,
      component: 'TextField',
    },
    {
      id: 'time',
      label: '시간 선택',
      placeholder: '17:00 - 21:00',
      isRequired: false,
      component: 'TextField',
    },
    {
      id: 'keywords',
      label: '키워드 입력',
      placeholder: '#축제 #강연 #할인행사',
      isRequired: false,
      component: 'TextField',
    },
  ];

  return (
    <div className="flex flex-col justify-between min-h-screen py-10">
      {/* Header */}
      <div className="flex items-center text-center">
        <Image src={LogoTitle} alt={'logo'} height={20} />
        <span className="text-sm font-semibold tracking-wide">타임럭스</span>
        <span className="bg-gray-700 text-xs rounded-full px-2 py-1 ml-2">
          베타
        </span>
      </div>

      {/* Main Content */}
      <main className="mt-12 ml-6">
        <p className="text-lg font-medium">AI time search engine</p>
        <span className="text-5xl font-bold leading-tight mt-2">
          시간을 밝히다<span className="text-yellow-500">.</span>
        </span>

        {/* Filters */}
        <div className="flex justify-center gap-4 mt-8">
          {fields.map((field) => (
            <div
              key={field.id}
              className="flex flex-col px-6 py-2 border rounded-md bg-tx-gray-50"
            >
              {/* 필드 레이블 */}
              <span className="text-tx-gray-10">
                {field.label}{' '}
                {field.isRequired && <span className="text-red-400">*</span>}
              </span>

              {/* 필드 컴포넌트 */}
              <Box maxWidth="170px">
                {field.component === 'TextField' && (
                  <TextField.Root
                    placeholder={field.placeholder}
                    variant="soft"
                    className="bg-tx-gray-50 text-tx-gray-10 input-text-light"
                  />
                )}
                {field.component === 'ChipListInput' && (
                  <ChipListInput
                    placeholder={field.placeholder}
                    onChange={(values) =>
                      console.log(`Current tags for ${field.id}:`, values)
                    }
                  />
                )}
              </Box>
            </div>
          ))}

          <Button
            variant="solid"
            className="bg-blue-500 hover:bg-blue-600 h-[77] w-[105]"
          >
            검색하기
          </Button>
        </div>

        {/* Subtext */}
        <p className="mt-6 text-white font-bold">
          전국에서 1,241,213 시간이 밝게 빛나고 있습니다 ✨
        </p>

        <Image
          className="mt-8"
          src={Gemini}
          alt={'gemini'}
          width={170}
          height={63}
        />
      </main>

      {/* Footer */}
      <div className="mt-12 text-center">
        <div className="flex justify-center gap-4">
          <Button
            variant="soft"
            color={'gray'}
            className="text-gray-900 font-bold bg-white hover:bg-gray-200"
          >
            🧐 타임렉스 팀이 궁금하신가요?
          </Button>
          <Link href={'https://forms.gle/FTxscDvBVyaucoaeA'} target={'_blank'}>
            <Button
              variant="soft"
              color={'gray'}
              className="text-gray-900 font-bold bg-white hover:bg-gray-200"
            >
              3초 만에 이벤트 제보하기
            </Button>
          </Link>
          <Button
            variant="solid"
            className="bg-yellow-500 hover:bg-yellow-600 text-black"
          >
            🔥 이벤트 등록하고 시간 밝히기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LeftContainer;
