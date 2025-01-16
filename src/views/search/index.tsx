import { Flex } from '@radix-ui/themes';
import { useRouter } from 'next/router';

import Button from '@/components/ui/Button';
import InputField from '@/components/ui/InputField';
import useInput from '@/hooks/useInput';

const SearchContainer = () => {
  const router = useRouter();

  const [date, setDate] = useInput<string>('');
  const [location, setLocation] = useInput<string>('');
  const [startTime, setStartTime] = useInput<string>('');
  const [endTime, setEndTime] = useInput<string>('');
  const [keyword, setKeyword] = useInput<string>('');

  const handleSearch = () => {
    const queryParams = new URLSearchParams({
      date,
      location,
      startTime,
      endTime,
      keyword,
    });

    router.push(`/search/result?${queryParams.toString()}`);
  };

  return (
    <div>
      <Flex direction="column" gap="4" className="flex-1">
        <InputField
          fieldType={'input'}
          label="날짜 선택"
          isRequired={true}
          inputProps={{
            type: 'date',
            onChange: setDate,
            value: date,
          }}
        />
        <InputField
          fieldType={'input'}
          label="지역 선택"
          isRequired={true}
          inputProps={{
            type: 'text',
            placeholder: '서울특별시 동대문구',
            onChange: setLocation,
            value: location,
          }}
        />
        <Flex direction="row" gap="2">
          <InputField
            fieldType={'input'}
            label="시작시간 선택"
            inputProps={{
              type: 'time',
              onChange: setStartTime,
              value: startTime,
            }}
            wrapperClassName="w-full"
          />
          <InputField
            fieldType={'input'}
            label="종료시간 선택"
            inputProps={{
              type: 'time',
              onChange: setEndTime,
              value: endTime,
            }}
            wrapperClassName="w-full"
          />
        </Flex>
        <InputField
          fieldType={'input'}
          label="키워드 입력"
          inputProps={{
            type: 'text',
            placeholder: '#음악 #팝업 #할인행사 #축제 #공연',
            onChange: setKeyword,
            value: keyword,
          }}
        />
      </Flex>
      <div className="absolute bottom-10 left-0 w-full px-6">
        <Button className="w-full" size="3" onClick={handleSearch}>
          검색
        </Button>
      </div>
    </div>
  );
};

export default SearchContainer;
