import type { UseFormReturn } from 'react-hook-form';

import type { FieldDefinition } from '@/features/event/types/field-definition';
import type { FormValues } from '@/features/event/types/form-values';
import EventDetail from '@/features/event/ui/EventDetail';

interface RenderEventDetailsProps {
  fields: FieldDefinition[];
  form: Pick<UseFormReturn<FormValues>, 'getValues' | 'formState'>;
  isReadOnly: boolean;
}

export const renderEventDetails = ({
  fields,
  form,
  isReadOnly,
}: RenderEventDetailsProps) =>
  fields.map(
    ({ label, title, value, isRequired, placeholder, type, fieldType }) => (
      <EventDetail<FormValues>
        key={`event-form-${label}-${value}`}
        label={label}
        title={title}
        name={value as keyof FormValues}
        value={form.getValues(value as keyof FormValues)}
        error={form.formState.errors[value as keyof FormValues]}
        isRequired={isRequired}
        placeholder={placeholder}
        type={type}
        fieldType={fieldType}
        isReadOnly={isReadOnly}
      />
    )
  );
