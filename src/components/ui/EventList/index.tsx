import EventCard from '@/components/ui/EventCard';

const EventList = () => {
  const events = [
    {
      image: '/path/to/image1.jpg',
      title: 'YOUNG POSSE CONCERT',
      date: '2024.12.14.(토)',
      location: '예스24 원더로그홀',
    },
    {
      image: '/path/to/image2.jpg',
      title: '주술회전 0 전시',
      date: '2024.11.23.(토)~2025.03.30.(일)',
      location: '대원뮤지엄 팝콘D스퀘어',
    },
    // 추가 이벤트 데이터...
  ];

  return (
    <div className="space-y-4">
      {events.map((event, index) => (
        <EventCard
          key={index}
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
