import type { FieldType } from '@/components/ui/InputField';
import { FIELD_LABELS } from '@/views/event-new/constants/fieldLabels';
import { schema } from '@/views/event-new/constants/schema';
import { isFieldRequired } from '@/views/event-new/utils/isFieldRequired';

interface FieldDefinition {
  label: string;
  value: string;
  placeholder: string;
  isRequired: boolean;
  fieldType?: FieldType; // 선택적 필드
}

export const detailFieldsSection0: FieldDefinition[] = [
  {
    label: FIELD_LABELS.title,
    value: 'title',
    placeholder: '이벤트 제목을 입력해주세요.',
    isRequired: isFieldRequired(schema.shape['title']),
  },
];

export const detailFieldsSection1: FieldDefinition[] = [
  {
    label: FIELD_LABELS.startDate,
    value: 'startDate',
    placeholder: '이벤트 시작 날짜를 입력해주세요.',
    isRequired: isFieldRequired(schema.shape['startDate']),
  },
  {
    label: FIELD_LABELS.endDate,
    value: 'endDate',
    placeholder: '이벤트 종료 날짜를 입력해주세요.',
    isRequired: isFieldRequired(schema.shape['endDate']),
  },
];

export const detailFieldsSection2: FieldDefinition[] = [
  {
    label: FIELD_LABELS.startTime,
    value: 'startTime',
    placeholder: '이벤트 시작 시간을 입력해주세요.',
    isRequired: isFieldRequired(schema.shape['startTime']),
  },
  {
    label: FIELD_LABELS.endTime,
    value: 'endTime',
    placeholder: '이벤트 종료 시간을 입력해주세요.',
    isRequired: isFieldRequired(schema.shape['endTime']),
  },
];

export const detailFieldsSection3: FieldDefinition[] = [
  {
    label: FIELD_LABELS.venue,
    value: 'venue',
    placeholder: '이벤트 장소를 입력해주세요.',
    isRequired: isFieldRequired(schema.shape['venue']),
  },
  {
    label: FIELD_LABELS.address,
    value: 'address',
    placeholder: '이벤트 주소를 입력해주세요.',
    isRequired: isFieldRequired(schema.shape['address']),
  },
  {
    label: FIELD_LABELS.information,
    value: 'information',
    placeholder: '이벤트 정보를 입력해주세요.',
    fieldType: 'textarea' as FieldType,
    isRequired: isFieldRequired(schema.shape['information']),
  },
  {
    label: FIELD_LABELS.organizer,
    value: 'organizer',
    placeholder: '주최·주관을 입력해주세요.',
    isRequired: isFieldRequired(schema.shape['organizer']),
  },
  {
    label: FIELD_LABELS.sponsor,
    value: 'sponsor',
    placeholder: '링크를 입력해주세요.',
    isRequired: isFieldRequired(schema.shape['sponsor']),
  },
  {
    label: FIELD_LABELS.tags,
    value: 'tags',
    placeholder: '태그를 입력해주세요.',
    fieldType: 'chip' as FieldType,
    isRequired: isFieldRequired(schema.shape['tags']),
  },
];
