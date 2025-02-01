import { isEmpty } from 'lodash-es';
import Image from 'next/image';
import Link from 'next/link';
import type React from 'react';

import Gemini from '@/shared/assets/icon/gemini.png';
import LogoTitle from '@/shared/assets/icon/title.png';
import { PLACEHOLDERS } from '@/shared/constants/placeholders';
import { useAppRouter } from '@/shared/hooks/useAppRouter';
import useInput from '@/shared/hooks/useInput';
import { useToaster } from '@/shared/hooks/useToaster';
import { cn } from '@/shared/lib/utils';
import type { InputType } from '@/shared/types/input-type';
import Button from '@/shared/ui/Button';
import type { FieldType } from '@/shared/ui/InputField';
import InputField from '@/shared/ui/InputField';

interface LeftContainerProps {
  className?: string;
}

const LeftContainer: React.FC<LeftContainerProps> = ({ className }) => {
  const router = useAppRouter();

  const [date, setDate] = useInput<string>('');
  const [location, setLocation] = useInput<string>('');
  const [startTime, setStartTime] = useInput<string>('');
  const [keyword, setKeyword] = useInput<string>('');
  const toaster = useToaster();

  const handleSearch = () => {
    if (isEmpty(date) || isEmpty(location)) {
      toaster.error('날짜와 지역은 필수 입력 항목입니다.');
      return;
    }

    const queryParams = new URLSearchParams({
      date,
      location,
      startTime,
      endTime: startTime,
      keyword,
    });

    router.push(`/search/result?${queryParams.toString()}`);
  };

  const fields: {
    id: string;
    label: string;
    placeholder: string;
    isRequired: boolean;
    component: FieldType;
    type?: InputType;
    value: string;
    setValue: (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
  }[] = [
    {
      id: 'date',
      label: '날짜 선택',
      placeholder: PLACEHOLDERS.DATE,
      isRequired: true,
      component: 'input',
      type: 'date',
      value: date,
      setValue: setDate,
    },
    {
      id: 'location',
      label: '지역 입력',
      placeholder: PLACEHOLDERS.LOCATION,
      isRequired: true,
      component: 'input',
      type: 'text',
      value: location,
      setValue: setLocation,
    },
    {
      id: 'time',
      label: '시간 선택',
      placeholder: PLACEHOLDERS.TIME,
      isRequired: false,
      component: 'input',
      type: 'time',
      value: startTime,
      setValue: setStartTime,
    },
    {
      id: 'keywords',
      label: '키워드 입력',
      placeholder: PLACEHOLDERS.KEYWORD,
      isRequired: false,
      component: 'input',
      type: 'text',
      value: keyword,
      setValue: setKeyword,
    },
  ];

  return (
    <div
      className={cn(
        'flex flex-col justify-between min-h-screen py-10',
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center text-center">
        <Image src={LogoTitle} alt={'logo'} height={20} />
        <span className="text-md font-semibold tracking-wide">타임럭스</span>
        <span className="bg-gray-700 text-xs rounded-full px-2 py-1 ml-2">
          Beta
        </span>
      </div>

      {/* Main Content */}
      <div className="ml-6">
        <p className="text-lg font-medium">시간을 밝히는</p>
        <span className="text-5xl font-bold leading-tight mt-2">
          시간상점<span className="text-yellow-500">.</span>
        </span>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mt-8">
          {fields.map((field) => (
            <InputField
              key={field.id}
              fieldType={field.component}
              label={field.label}
              isRequired={field.isRequired}
              inputProps={{
                placeholder: field.placeholder,
                type: field.type,
                onChange: field.setValue,
                value: field.value,
              }}
            />
          ))}

          <Button
            variant="solid"
            className="h-[77] w-[105]"
            onClick={handleSearch}
          >
            검색
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
      </div>

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
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold"
          >
            🔥 이벤트 등록하고 시간 밝히기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LeftContainer;
