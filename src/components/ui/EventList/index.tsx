import type React from 'react';

import EventCard from '@/components/ui/EventCard';

interface EventListProps {
  events: {
    id: number;
    image: string;
    title: string;
    date: string;
    location: string;
  }[];
}

/**
 * `EventList` 컴포넌트
 *
 * 다수의 이벤트 정보를 리스트 형태로 렌더링합니다.
 * `EventCard` 컴포넌트를 활용하여 각각의 이벤트 정보를 표시합니다.
 *
 * ---
 * 🌟 **주요 기능**:
 * - 제공된 이벤트 데이터를 기반으로 `EventCard`를 반복 렌더링.
 * - 각 이벤트에 찜(좋아요) 기능 제공.
 *
 * ---
 * 📋 **Props**:
 * - 별도의 props를 받지 않습니다. 이벤트 데이터는 컴포넌트 내부에서 관리됩니다.
 *
 * ---
 * 💡 **사용 예제**:
 * ```tsx
 * <EventList />
 * ```
 */
const EventList: React.FC<EventListProps> = ({ events }) => {
  return (
    <div className="space-y-4">
      {events.map((event, index) => (
        <EventCard
          key={event.id}
          id={event.id}
          image={event.image}
          title={event.title}
          date={event.date}
          location={event.location}
        />
      ))}
    </div>
  );
};

export default EventList;
