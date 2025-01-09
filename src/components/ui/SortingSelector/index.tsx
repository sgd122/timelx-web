import * as Popover from '@radix-ui/react-popover';
import React from 'react';

interface SortingSelectorProps {
  options: string[];
  onSelect: (selected: string) => void;
}

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
