import { Button, Flex } from '@radix-ui/themes';
import Link from 'next/link';

import InputField from '@/components/ui/InputField';

const SearchContainer = () => {
  return (
    <>
      <Flex direction="column" gap="4">
        <InputField
          fieldType={'input'}
          label="날짜 선택"
          isRequired={true}
          inputProps={{ type: 'date' }}
        />
        <InputField
          fieldType={'input'}
          label="지역 선택"
          isRequired={true}
          inputProps={{ type: 'text', placeholder: '서울특별시 동대문구' }}
        />
        <Flex direction="row" gap="2">
          <InputField
            fieldType={'input'}
            label="시작시간 선택"
            inputProps={{ type: 'time' }}
            wrapperClassName="w-full"
          />
          <InputField
            fieldType={'input'}
            label="종료시간 선택"
            inputProps={{ type: 'time' }}
            wrapperClassName="w-full"
          />
        </Flex>
        <InputField
          fieldType={'input'}
          label="키워드 입력"
          inputProps={{
            type: 'text',
            placeholder: '#음악 #팝업 #할인행사 #축제 #공연',
          }}
        />
      </Flex>
      <Link href="/search/result">
        <Button>go search result</Button>
      </Link>
    </>
  );
};

export default SearchContainer;
