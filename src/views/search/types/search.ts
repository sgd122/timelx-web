import type { ChangeEvent } from 'react';

// 입력값만을 포함하는 타입 정의
export interface SearchValues {
  date: string;
  location: string;
  startTime: string;
  endTime: string;
  keyword: string;
}

// 입력값을 업데이트하는 함수 타입 정의
export interface SearchSetters {
  setDate: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  setLocation: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  setStartTime: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  setEndTime: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  setKeyword: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

// 최종적으로 반환될 튜플 타입 정의
export type SearchFormInputs = readonly [SearchValues, SearchSetters];
