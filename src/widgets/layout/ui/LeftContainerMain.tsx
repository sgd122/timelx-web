import Image from 'next/image';
import type { ChangeEvent } from 'react';

import Gemini from '@/shared/assets/icon/gemini.png';
import useInput from '@/shared/hooks/useInput';
import Button from '@/shared/ui/Button';
import InputField from '@/shared/ui/InputField';
import { formFields } from '@/widgets/layout/data/formFields';
import useSearchHandler from '@/widgets/layout/hooks/useSearchHandler';

const LeftContainerMain = () => {
  const [date, setDate] = useInput<string>('');
  const [location, setLocation] = useInput<string>('');
  const [time, setTime] = useInput<string>('');
  const [keyword, setKeyword] = useInput<string>('');

  const handleSearch = useSearchHandler({ date, location, time, keyword });

  const fieldValues: Record<string, string> = {
    date,
    location,
    time,
    keyword,
  };

  const fieldHandlers: Record<
    string,
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  > = {
    date: setDate,
    location: setLocation,
    time: setTime,
    keyword: setKeyword,
  };

  return (
    <div className="ml-6">
      <p className="text-lg font-medium">시간을 밝히는</p>
      <span className="text-5xl font-bold leading-tight mt-2">
        시간상점<span className="text-yellow-500">.</span>
      </span>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mt-8">
        {formFields.map((field) => (
          <InputField
            key={field.id}
            fieldType={field.component}
            label={field.label}
            isRequired={field.isRequired}
            inputProps={{
              placeholder: field.placeholder,
              type: field.type,
              onChange: (e) => fieldHandlers[field.id]?.(e),
              value: fieldValues[field.id] || '',
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
        alt="gemini"
        width={170}
        height={63}
      />
    </div>
  );
};

export default LeftContainerMain;
