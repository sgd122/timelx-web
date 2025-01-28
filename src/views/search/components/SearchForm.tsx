import { Flex } from '@radix-ui/themes';

import InputField from '@/components/ui/InputField';
import { PLACEHOLDERS } from '@/constants/placeholders';
import type { SearchSetters, SearchValues } from '@/views/search/types/search';

const SearchForm: React.FC<SearchValues & SearchSetters> = ({
  date,
  setDate,
  location,
  setLocation,
  startTime,
  setStartTime,
  endTime,
  setEndTime,
  keyword,
  setKeyword,
}) => (
  <Flex direction="column" gap="4" className="flex-1">
    <InputField
      fieldType={'input'}
      label="날짜 선택"
      isRequired={true}
      inputProps={{
        type: 'date',
        onChange: setDate,
        value: date,
        placeholder: PLACEHOLDERS.DATE,
      }}
    />
    <InputField
      fieldType={'input'}
      label="지역 선택"
      isRequired={true}
      inputProps={{
        type: 'text',
        placeholder: PLACEHOLDERS.LOCATION,
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
          placeholder: PLACEHOLDERS.TIME,
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
          placeholder: PLACEHOLDERS.TIME,
        }}
        wrapperClassName="w-full"
      />
    </Flex>
    <InputField
      fieldType={'input'}
      label="키워드 입력"
      inputProps={{
        type: 'text',
        placeholder: PLACEHOLDERS.KEYWORDS,
        onChange: setKeyword,
        value: keyword,
      }}
    />
  </Flex>
);

export default SearchForm;
