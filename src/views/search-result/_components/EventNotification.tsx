import { Box, Text } from '@radix-ui/themes';

interface EventNotificationProps {
  content: string;
}

const EventNotification = ({ content }: EventNotificationProps) => {
  return (
    <Box className="flex items-start gap-2 p-4 text-gray-100 max-w-[400px] w-[calc(100vw-48px)]">
      {/* 왼쪽 동그라미 */}
      <Box className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-yellow-500 mt-1"></Box>

      {/* 텍스트 */}
      <Text className="text-sm font-medium leading-tight whitespace-pre-wrap">
        {content}
      </Text>
    </Box>
  );
};

export default EventNotification;
