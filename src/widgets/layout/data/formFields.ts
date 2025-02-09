import { PLACEHOLDERS } from '@/shared/constants/placeholders';
import type { InputType } from '@/shared/types/input-type';
import type { FieldType } from '@/shared/ui/InputField';

interface FieldConfig {
  id: string;
  label: string;
  placeholder: string;
  isRequired: boolean;
  component: FieldType;
  type?: InputType;
}

export const formFields: FieldConfig[] = [
  {
    id: 'date',
    label: '날짜 선택',
    placeholder: PLACEHOLDERS.DATE,
    isRequired: true,
    component: 'input',
    type: 'date',
  },
  {
    id: 'location',
    label: '지역 입력',
    placeholder: PLACEHOLDERS.LOCATION,
    isRequired: true,
    component: 'input',
    type: 'text',
  },
  {
    id: 'keyword',
    label: '키워드 입력',
    placeholder: PLACEHOLDERS.KEYWORD,
    isRequired: false,
    component: 'input',
    type: 'text',
  },
];
