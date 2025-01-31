import type { InputType } from '@/shared/types/input-type';
import type { FieldType } from '@/shared/ui/InputField';

export interface FieldDefinition {
  title?: string;
  label?: string;
  value: string;
  placeholder?: string;
  isRequired: boolean;
  fieldType?: FieldType; // 선택적 필드
  type?: InputType;
}
