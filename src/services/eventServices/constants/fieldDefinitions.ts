import type { FieldType } from '@/components/ui/InputField';
import { FIELD_LABELS } from '@/services/eventServices/constants/fieldLabels';
import { baseSchema } from '@/services/eventServices/constants/schema';
import type { FieldDefinition } from '@/services/eventServices/types/field-definition';
import { isFieldRequired } from '@/services/eventServices/utils/isFieldRequired';

export const detailFieldsSection0: FieldDefinition[] = [
  {
    title: FIELD_LABELS.title,
    value: 'title',
    placeholder: '이벤트 제목을 입력해주세요.',
    isRequired: isFieldRequired(baseSchema.shape['title']),
  },
];

export const detailFieldsSection1: FieldDefinition[] = [
  {
    label: FIELD_LABELS.startDate,
    value: 'startDate',
    type: 'date',
    placeholder: 'YYYY. MM. DD.',
    isRequired: isFieldRequired(baseSchema.shape['startDate']),
  },
  {
    label: FIELD_LABELS.endDate,
    value: 'endDate',
    type: 'date',
    placeholder: 'YYYY. MM. DD.',
    isRequired: isFieldRequired(baseSchema.shape['endDate']),
  },
];

export const detailFieldsSection2: FieldDefinition[] = [
  {
    title: FIELD_LABELS.startTime,
    value: 'startTime',
    type: 'time',
    placeholder: 'MM:SS',
    isRequired: isFieldRequired(baseSchema.shape['startTime']),
  },
  {
    title: FIELD_LABELS.endTime,
    value: 'endTime',
    type: 'time',
    placeholder: 'MM:SS',
    isRequired: isFieldRequired(baseSchema.shape['endTime']),
  },
];

export const detailFieldsSection3: FieldDefinition[] = [
  {
    title: FIELD_LABELS.venue,
    value: 'venue',
    placeholder: '이벤트 장소를 입력해주세요.',
    isRequired: isFieldRequired(baseSchema.shape['venue']),
  },
  {
    title: FIELD_LABELS.address,
    value: 'address',
    placeholder: '이벤트 주소를 입력해주세요.',
    isRequired: isFieldRequired(baseSchema.shape['address']),
  },
  {
    title: FIELD_LABELS.information,
    value: 'information',
    placeholder: '이벤트 정보를 입력해주세요.',
    fieldType: 'textarea' as FieldType,
    isRequired: isFieldRequired(baseSchema.shape['information']),
  },
  {
    title: FIELD_LABELS.organizer,
    value: 'organizer',
    placeholder: '주최·주관을 입력해주세요.',
    isRequired: isFieldRequired(baseSchema.shape['organizer']),
  },
  {
    title: FIELD_LABELS.urlName,
    value: 'urlName',
    placeholder: '링크를 입력해주세요.',
    isRequired: isFieldRequired(baseSchema.shape['urlName']),
  },
  {
    title: FIELD_LABELS.urlLink,
    value: 'urlLink',
    placeholder: '링크를 입력해주세요.',
    isRequired: isFieldRequired(baseSchema.shape['urlLink']),
  },
  {
    title: FIELD_LABELS.tags,
    value: 'tags',
    fieldType: 'chip' as FieldType,
    isRequired: isFieldRequired(baseSchema.shape['tags']),
  },
];
