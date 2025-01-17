import type { FieldType } from '@/components/ui/InputField';
import type { InputType } from '@/types/input-type';

export interface FieldDefinition {
  title?: string;
  label?: string;
  value: string;
  placeholder?: string;
  isRequired: boolean;
  fieldType?: FieldType; // 선택적 필드
  type?: InputType;
}
