import { Button } from '@radix-ui/themes';
import Image from 'next/image';
import Link from 'next/link';

import Gemini from '@/assets/icon/gemini.png';
import LogoTitle from '@/assets/icon/title.png';
import type { FieldType } from '@/components/ui/InputField';
import InputField from '@/components/ui/InputField';

const LeftContainer = () => {
  const fields: {
    id: string;
    label: string;
    placeholder: string;
    isRequired: boolean;
    component: FieldType;
  }[] = [
    {
      id: 'date',
      label: '날짜 선택',
      placeholder: '날짜 입력',
      isRequired: true,
      component: 'input',
    },
    {
      id: 'location',
      label: '지역 입력',
      placeholder: '지역 입력',
      isRequired: false,
      component: 'input',
    },
    {
      id: 'time',
      label: '시간 선택',
      placeholder: '17:00 - 21:00',
      isRequired: false,
      component: 'input',
    },
    {
      id: 'keywords',
      label: '키워드 입력',
      placeholder: '#축제 #강연 #할인행사',
      isRequired: false,
      component: 'input',
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
            <InputField
              key={field.id}
              fieldType={field.component}
              inputProps={{ placeholder: field.placeholder }}
              label={field.label}
              isRequired={field.isRequired}
              wrapperProps={{ maxWidth: '170px' }}
            />
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
            🧐 타임럭스 팀이 궁금하신가요?
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
