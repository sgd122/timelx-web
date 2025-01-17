import { Box, Text } from '@radix-ui/themes';

interface EventNotificationProps {
  content: string;
}

const EventNotification = ({ content }: EventNotificationProps) => {
  return (
    <Box className="flex items-start gap-2 p-4 text-gray-100">
      {/* 왼쪽 동그라미 */}
      <Box className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-yellow-500 mt-1"></Box>

      {/* 텍스트 */}
      <Box className="flex flex-col">
        <Text
          className="text-sm font-medium leading-tight whitespace-pre-wrap"
          style={{ wordBreak: 'break-word' }} // 줄바꿈 및 긴 텍스트 처리
        >
          {content}
        </Text>
      </Box>
    </Box>
  );
};

export default EventNotification;
