import { AlertDialog, Button, Flex } from '@radix-ui/themes';

interface DeleteButtonProps {
  onDelete?: () => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ onDelete }) => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button type="button" color="red" size="3" className="w-full mb-6">
          삭제
        </Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content maxWidth="450px">
        <AlertDialog.Title>이벤트 삭제</AlertDialog.Title>
        <AlertDialog.Description size="2">
          등록된 이벤트를 삭제하시겠습니까?
        </AlertDialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              취소
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button variant="solid" color="red" onClick={onDelete}>
              삭제
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default DeleteButton;
