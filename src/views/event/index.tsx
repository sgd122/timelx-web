import { Flex, Section, Text } from '@radix-ui/themes';

import type { FieldType } from '@/components/ui/InputField';
import EventDetail from '@/views/event/_components/EventDetail';
import EventImage from '@/views/event/_components/EventImage';
import { EVENT_DETAILS } from '@/views/event/dummy';

const EventContainer = () => {
  const {
    image,
    title,
    startDate,
    endDate,
    venue,
    address,
    information,
    organizer,
    sponsor,
    tags,
  } = EVENT_DETAILS;

  // EventDetail 데이터를 배열로 정리
  const detailFields = [
    { label: '시작일', value: startDate },
    { label: '종료일', value: endDate },
    { label: '장소명', value: venue },
    { label: '상세주소', value: address },
    { label: '이벤트 정보', value: information, fieldType: 'textarea' },
    { label: '주최', value: organizer },
    { label: '주관', value: sponsor },
    { label: '', value: tags, fieldType: 'chip' },
  ];

  return (
    <Section className="flex flex-col gap-8 p-0">
      <EventImage image={image} />
      <Flex className="gap-5" direction="column">
        <Text size="5">{title}</Text>

        <Flex className="gap-3.5 justify-between max-w-[87vw]">
          {detailFields.slice(0, 2).map(({ label, value }, idx) => (
            <EventDetail key={`event-${label}`} label={label} value={value} />
          ))}
        </Flex>

        {detailFields.slice(2).map(({ label, value, fieldType }, idx) => (
          <EventDetail
            key={`event-${label}`}
            label={label}
            value={value}
            fieldType={fieldType as FieldType}
          />
        ))}
      </Flex>
    </Section>
  );
};

export default EventContainer;
