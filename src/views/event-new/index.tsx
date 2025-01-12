import { useAtom } from 'jotai/react';
import { useEffect } from 'react';

import { submitActionAtom } from '@/store/submitActionAtom';

const EventNewContainer = () => {
  const [isSubmitAction, setSubmitAction] = useAtom(submitActionAtom);

  const onSubmit = () => {
    alert('등록 액션 수행');
  };

  useEffect(() => {
    if (isSubmitAction) {
      // 상태 초기화
      setSubmitAction(false);
      // ANCHOR: 등록 액션 처리
      onSubmit();
    }
  }, [isSubmitAction]);

  return <div>이벤트 등록페이지</div>;
};

export default EventNewContainer;
