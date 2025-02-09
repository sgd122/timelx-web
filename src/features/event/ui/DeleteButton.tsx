import Button from '@/shared/ui/Button';
import ConfirmDialog from '@/shared/ui/ConfirmDialog';

interface DeleteButtonProps {
  onDelete?: () => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ onDelete }) => {
  return (
    <ConfirmDialog
      title="이벤트 삭제"
      description="등록된 이벤트를 삭제하시겠습니까?"
      confirmLabel="삭제"
      confirmColor="red"
      onConfirm={onDelete}
      trigger={
        <Button type="button" color="red" size="3" className="w-full mb-6">
          삭제
        </Button>
      }
    />
  );
};

export default DeleteButton;
