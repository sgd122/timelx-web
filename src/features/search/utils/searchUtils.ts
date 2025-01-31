import { isEmpty } from 'lodash-es';
import toast from 'react-hot-toast';

interface SearchParams {
  date: string;
  location: string;
  time?: string;
  keyword?: string;
}

/**
 * 검색 조건을 검증하는 함수
 * @param params - 검색 인자
 * @returns 유효성 검사 결과 (true = 실패, false = 성공)
 */
export const validateSearchParams = ({
  date,
  location,
}: SearchParams): boolean => {
  if (isEmpty(date) || isEmpty(location)) {
    toast.error('날짜와 지역은 필수 입력 항목입니다.');
    return true;
  }
  return false;
};

/**
 * 검색 결과 페이지로 이동하는 함수
 * @param params - 검색 인자
 * @param push - Next.js의 router.push 함수
 */
export const searchResults = (
  params: SearchParams,
  push: (url: string) => void
) => {
  const queryParams = new URLSearchParams({
    date: params.date,
    location: params.location,
    time: params.time || '',
    keyword: params.keyword || '',
  });

  push(`/search/result?${queryParams.toString()}`);
};
