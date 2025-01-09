import { Select } from '@radix-ui/themes';
import React from 'react';

interface SortingSelectorProps {
  options: string[];
  onSelect: (selected: string) => void;
}

/**
 * SortingSelector 컴포넌트
 *
 * 사용자가 정렬 옵션을 선택할 수 있는 드롭다운 UI 컴포넌트입니다.
 *
 * ---
 * 🌟 **주요 기능**:
 * - Radix Popover를 활용하여 정렬 옵션 드롭다운 제공
 * - 사용자가 선택한 옵션을 부모 컴포넌트에 콜백으로 전달
 * - 선택된 옵션은 버튼에 표시되며 UI 상태를 관리
 *
 * ---
 * 📋 **Props**:
 * - options (필수): 드롭다운에 표시할 정렬 옵션의 문자열 배열입니다.
 * - onSelect (필수): 사용자가 옵션을 선택했을 때 호출되는 콜백 함수입니다. 선택된 옵션 문자열을 인수로 받습니다.
 *
 * ---
 * 💡 **사용 예제**:
 * ```tsx
 * <SortingSelector
 *   options={['최신순', '인기순', '가격 낮은순']}
 *   onSelect={(selected) => console.log('선택된 옵션:', selected)}
 * />
 * ```
 *
 * ---
 * 🔗 **관련 컴포넌트**:
 * - Radix Popover: 드롭다운 UI를 제공하는 핵심 라이브러리입니다.
 *
 * ---
 * ⚙ **구성 요소**:
 * - **Popover.Trigger**: 드롭다운을 열기 위한 버튼.
 * - **Popover.Content**: 드롭다운 내용이 표시되는 컨테이너.
 * - **Popover.Arrow**: 드롭다운과 버튼을 시각적으로 연결하는 화살표.
 */
const SortingSelector: React.FC<SortingSelectorProps> = ({
  options,
  onSelect,
}) => {
  const [selectedOption, setSelectedOption] = React.useState<string>(
    options[0]
  );

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <Select.Root
      size="2"
      defaultValue={selectedOption}
      onValueChange={handleSelect}
    >
      <Select.Trigger className="bg-accent w-fit" />
      <Select.Content>
        {options.map((option) => (
          <Select.Item
            onSelect={() => handleSelect(option)}
            key={option}
            value={option}
          >
            {option}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export default SortingSelector;
