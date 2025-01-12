import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@radix-ui/react-dialog';
import { Button, Text } from '@radix-ui/themes';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';

// 이전 페이지 유효성 검사 함수
const isValidPreviousPage = () => {
  const referrer = document.referrer;
  return referrer.includes(window.location.origin); // 외부 링크가 아닌 경우에만 true
};
const CloseDialog = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const router = useRouter();
  const handleDiscard = () => {
    setIsDialogOpen(false);
    // Navigate or reset logic here
    if (window.history.length > 1 && isValidPreviousPage()) {
      router.back(); // 히스토리가 있고 이전 페이지가 유효하면 뒤로가기
    } else {
      router.push('/'); // 그렇지 않으면 홈으로 이동
    }
  };

  const handleCancel = () => {
    setIsDialogOpen(false);
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild={true}>
        <Button className="bg-transparent border-none cursor-pointer">
          <IoMdClose size="24" />
        </Button>
      </DialogTrigger>

      <DialogContent className="fixed inset-0 flex items-center justify-center p-4 bg-black/50 z-50">
        <div className="rounded-lg p-6 bg-accent shadow-lg max-w-md w-full">
          <DialogTitle className="text-lg font-bold">
            변경 사항이 사라질 수 있습니다
          </DialogTitle>
          <DialogDescription className="mt-2 text-gray-50">
            <Text as="p">현재 작성 중인 내용이 저장되지 않았습니다.</Text>
            <Text as="p">
              페이지를 떠나면 작성한 내용이 사라질 수 있습니다.
            </Text>
            <Text as="p">계속 진행하시겠습니까?</Text>
          </DialogDescription>
          <div className="mt-4 flex justify-end items-center gap-4">
            <Button variant="ghost" onClick={handleCancel}>
              취소
            </Button>
            <Button variant="solid" onClick={handleDiscard}>
              계속
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CloseDialog;
