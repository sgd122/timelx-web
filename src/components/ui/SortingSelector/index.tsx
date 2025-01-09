import * as Popover from '@radix-ui/react-popover';
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
    <Popover.Root>
      <Popover.Trigger asChild={true}>
        <button
          className="bg-accent flex items-center px-3 py-2 rounded-lg border border-transparent hover:border-gray-500 transition w-fit"
          style={{
            color: '#FFFFFF',
            fontWeight: 'normal',
            fontSize: '14px',
            gap: '8px',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 7l4-4m0 0l4 4m-4-4v18m4-4l-4 4m0 0l-4-4"
            />
          </svg>
          {selectedOption}
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          align="start"
          sideOffset={5}
          style={{
            backgroundColor: 'white',
            borderRadius: '4px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
            border: '1px solid #ccc',
            padding: '8px 0',
            zIndex: 1000,
            minWidth: '150px',
          }}
        >
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleSelect(option)}
              className="px-3 py-2 hover:bg-gray-700 cursor-pointer"
              style={{
                backgroundColor:
                  selectedOption === option ? '#444' : 'transparent',
              }}
            >
              {option}
            </div>
          ))}
          <Popover.Arrow
            style={{
              fill: 'var(--bg-accent)',
              stroke: '#666',
              strokeWidth: '1px',
            }}
          />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default SortingSelector;
