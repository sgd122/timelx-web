import { Flex } from '@radix-ui/themes';

import InputField from '@/components/ui/InputField';
import { PLACEHOLDERS } from '@/constants/placeholders';
import type { SearchSetters, SearchValues } from '@/views/search/types/search';

const fields: Array<{
  key: string;
  label: string;
  type: 'date' | 'text' | 'time';
  required?: boolean;
}> = [
  { key: 'date', label: '날짜 선택', type: 'date', required: true },
  { key: 'location', label: '지역 선택', type: 'text', required: true },
  { key: 'time', label: '시간 선택', type: 'time' },
  { key: 'keyword', label: '키워드 입력', type: 'text' },
];

const SearchForm: React.FC<SearchValues & SearchSetters> = (props) => (
  <Flex direction="column" gap="4" className="flex-1">
    {fields.map(({ key, label, type, required }) => {
      // 🔥 setter의 정확한 키를 추론하도록 타입 보장
      const setterKey =
        `set${key.charAt(0).toUpperCase()}${key.slice(1)}` as keyof SearchSetters;

      return (
        <InputField
          key={key}
          fieldType="input"
          label={label}
          isRequired={required}
          inputProps={{
            type,
            placeholder:
              PLACEHOLDERS[key.toUpperCase() as keyof typeof PLACEHOLDERS],
            onChange: props[setterKey],
            value: props[key as keyof SearchValues],
          }}
          wrapperClassName={type === 'time' ? 'w-full' : undefined}
        />
      );
    })}
  </Flex>
);

export default SearchForm;
