import { forwardRef } from 'react';

import EventCard from '@/features/event/ui/EventCard';

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
 * - `events`: 이벤트 목록 데이터 (배열)
 * - `ref`: 컴포넌트의 DOM 접근을 위한 React ref 지원
 *
 * ---
 * 💡 **사용 예제**:
 * ```tsx
 * const eventListRef = useRef<HTMLDivElement>(null);
 * <EventList ref={eventListRef} events={eventData} />
 * ```
 */
const EventList = forwardRef<HTMLDivElement, EventListProps>(
  ({ events }, ref) => {
    return (
      <div ref={ref} className="space-y-4">
        {events.map((event) => (
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
  }
);

EventList.displayName = 'EventList';

export default EventList;
