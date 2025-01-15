import type { FieldType } from '@/components/ui/InputField';
import type { InputType } from '@/types/input-type';
import { FIELD_LABELS } from '@/views/event-new/constants/fieldLabels';
import { schema } from '@/views/event-new/constants/schema';
import { isFieldRequired } from '@/views/event-new/utils/isFieldRequired';

interface FieldDefinition {
  title?: string;
  label?: string;
  value: string;
  placeholder: string;
  isRequired: boolean;
  fieldType?: FieldType; // 선택적 필드
  type?: InputType;
}

export const detailFieldsSection0: FieldDefinition[] = [
  {
    title: FIELD_LABELS.title,
    value: 'title',
    placeholder: '이벤트 제목을 입력해주세요.',
    isRequired: isFieldRequired(schema.shape['title']),
  },
];

export const detailFieldsSection1: FieldDefinition[] = [
  {
    label: FIELD_LABELS.startDate,
    value: 'startDate',
    type: 'date',
    placeholder: '1999. 01. 01',
    isRequired: isFieldRequired(schema.shape['startDate']),
  },
  {
    label: FIELD_LABELS.endDate,
    value: 'endDate',
    type: 'date',
    placeholder: '1999. 01. 01',
    isRequired: isFieldRequired(schema.shape['endDate']),
  },
];

export const detailFieldsSection2: FieldDefinition[] = [
  {
    title: FIELD_LABELS.startTime,
    value: 'startTime',
    type: 'time',
    placeholder: '00 : 00',
    isRequired: isFieldRequired(schema.shape['startTime']),
  },
  {
    title: FIELD_LABELS.endTime,
    value: 'endTime',
    type: 'time',
    placeholder: '00 : 00',
    isRequired: isFieldRequired(schema.shape['endTime']),
  },
];

export const detailFieldsSection3: FieldDefinition[] = [
  {
    title: FIELD_LABELS.venue,
    value: 'venue',
    placeholder: '이벤트 장소를 입력해주세요.',
    isRequired: isFieldRequired(schema.shape['venue']),
  },
  {
    title: FIELD_LABELS.address,
    value: 'address',
    placeholder: '이벤트 주소를 입력해주세요.',
    isRequired: isFieldRequired(schema.shape['address']),
  },
  {
    title: FIELD_LABELS.information,
    value: 'information',
    placeholder: '이벤트 정보를 입력해주세요.',
    fieldType: 'textarea' as FieldType,
    isRequired: isFieldRequired(schema.shape['information']),
  },
  {
    title: FIELD_LABELS.organizer,
    value: 'organizer',
    placeholder: '주최·주관을 입력해주세요.',
    isRequired: isFieldRequired(schema.shape['organizer']),
  },
  {
    title: FIELD_LABELS.sponsor,
    value: 'sponsor',
    placeholder: '링크를 입력해주세요.',
    isRequired: isFieldRequired(schema.shape['sponsor']),
  },
  {
    title: FIELD_LABELS.tags,
    value: 'tags',
    placeholder: '태그를 입력해주세요.',
    fieldType: 'chip' as FieldType,
    isRequired: isFieldRequired(schema.shape['tags']),
  },
];
