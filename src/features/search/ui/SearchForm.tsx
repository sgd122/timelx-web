import { Flex } from '@radix-ui/themes';

import useSearchInputs from '@/features/search/hooks/useSearchInputs';
import type {
  SearchSetters,
  SearchValues,
} from '@/features/search/types/search';
import { PLACEHOLDERS } from '@/shared/constants/placeholders';
import Button from '@/shared/ui/Button';
import InputField from '@/shared/ui/InputField';

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

interface SearchFormProps {
  onSearch: (values: SearchValues) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [searchValues, searchSetters] = useSearchInputs();

  return (
    <>
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
                onChange: searchSetters[setterKey],
                value: searchValues[key as keyof SearchValues],
              }}
              wrapperClassName={type === 'time' ? 'w-full' : undefined}
            />
          );
        })}
      </Flex>

      <div className="absolute bottom-10 left-0 w-full px-6">
        <Button
          className="w-full"
          size="3"
          onClick={() => onSearch(searchValues)}
        >
          검색
        </Button>
      </div>
    </>
  );
};

export default SearchForm;
