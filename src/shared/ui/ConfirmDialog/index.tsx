import { AlertDialog, Flex } from '@radix-ui/themes';

import Button from '@/shared/ui/Button';

interface ConfirmDialogProps {
  title: string;
  description: string;
  confirmLabel?: string;
  cancelLabel?: string;
  confirmColor?: 'red' | 'blue' | 'green' | 'gray'; // 버튼 색상 옵션
  onConfirm?: () => void;
  onCancel?: () => void;
  trigger: React.ReactNode;
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  title,
  description,
  confirmLabel = '확인',
  cancelLabel = '취소',
  confirmColor = 'red',
  onConfirm,
  onCancel,
  trigger,
}) => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>{trigger}</AlertDialog.Trigger>
      <AlertDialog.Content maxWidth="450px">
        <AlertDialog.Title>{title}</AlertDialog.Title>
        <AlertDialog.Description size="2">
          {description}
        </AlertDialog.Description>
        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel onClick={onCancel}>
            <Button variant="soft" color="gray">
              {cancelLabel}
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action onClick={onConfirm}>
            <Button variant="solid" color={confirmColor}>
              {confirmLabel}
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default ConfirmDialog;
