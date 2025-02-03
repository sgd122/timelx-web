import { FIELD_LABELS } from '@/features/event/constants/fieldLabels';
import { baseSchema } from '@/features/event/constants/schema';
import type { FieldDefinition } from '@/features/event/types/field-definition';
import { isFieldRequired } from '@/features/event/utils/isFieldRequired';
import { PLACEHOLDERS } from '@/shared/constants/placeholders';
import type { FieldType } from '@/shared/ui/InputField';

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
    placeholder: PLACEHOLDERS.DATE,
    isRequired: isFieldRequired(baseSchema.shape['startDate']),
  },
  {
    label: FIELD_LABELS.endDate,
    value: 'endDate',
    type: 'date',
    placeholder: PLACEHOLDERS.DATE,
    isRequired: isFieldRequired(baseSchema.shape['endDate']),
  },
];

export const detailFieldsSection2: FieldDefinition[] = [
  {
    title: FIELD_LABELS.startTime,
    value: 'startTime',
    type: 'time',
    placeholder: PLACEHOLDERS.TIME,
    isRequired: isFieldRequired(baseSchema.shape['startTime']),
  },
  {
    title: FIELD_LABELS.endTime,
    value: 'endTime',
    type: 'time',
    placeholder: PLACEHOLDERS.TIME,
    isRequired: isFieldRequired(baseSchema.shape['endTime']),
  },
];

export const detailFieldsSection3: FieldDefinition[] = [
  {
    title: FIELD_LABELS.venue,
    value: 'venue',
    placeholder: PLACEHOLDERS.VENUE,
    isRequired: isFieldRequired(baseSchema.shape['venue']),
  },
  {
    title: FIELD_LABELS.address,
    value: 'address',
    placeholder: PLACEHOLDERS.ADDRESS,
    fieldType: 'maps' as FieldType,
    isRequired: isFieldRequired(baseSchema.shape['address']),
  },
  {
    title: FIELD_LABELS.information,
    value: 'information',
    placeholder: PLACEHOLDERS.INFORMATION,
    fieldType: 'textarea' as FieldType,
    isRequired: isFieldRequired(baseSchema.shape['information']),
  },
  {
    title: FIELD_LABELS.organizer,
    value: 'organizer',
    placeholder: PLACEHOLDERS.ORGANIZER,
    isRequired: isFieldRequired(baseSchema.shape['organizer']),
  },
];

export const detailFieldsSection4: FieldDefinition[] = [
  {
    title: FIELD_LABELS.urlName,
    value: 'urlName',
    placeholder: PLACEHOLDERS.URL_NAME,
    isRequired: isFieldRequired(baseSchema.shape['urlName']),
  },
  {
    title: FIELD_LABELS.urlLink,
    value: 'urlLink',
    placeholder: PLACEHOLDERS.URL_LINK,
    isRequired: isFieldRequired(baseSchema.shape['urlLink']),
  },
];

export const detailFieldsSection5: FieldDefinition[] = [
  {
    title: FIELD_LABELS.tags,
    value: 'tags',
    fieldType: 'chip' as FieldType,
    isRequired: isFieldRequired(baseSchema.shape['tags']),
  },
];
