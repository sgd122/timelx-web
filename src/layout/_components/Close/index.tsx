import { Button } from '@radix-ui/themes';
import { useRouter } from 'next/router';
import { IoMdClose } from 'react-icons/io';

// 이전 페이지 유효성 검사 함수
const isValidPreviousPage = () => {
  const referrer = document.referrer;
  return referrer.includes(window.location.origin); // 외부 링크가 아닌 경우에만 true
};

interface CloseProps {
  href?: string;
}
const Close: React.FC<CloseProps> = ({ href }) => {
  const router = useRouter();
  const handleDiscard = () => {
    if (href) {
      router.push(href);
      return;
    }

    // Navigate or reset logic here
    if (window.history.length > 1 && isValidPreviousPage()) {
      router.back(); // 히스토리가 있고 이전 페이지가 유효하면 뒤로가기
    } else {
      router.push('/'); // 그렇지 않으면 홈으로 이동
    }
  };

  return (
    <Button
      className="bg-transparent border-none cursor-pointer"
      onClick={handleDiscard}
    >
      <IoMdClose size="24" />
    </Button>
  );
};

export default Close;
