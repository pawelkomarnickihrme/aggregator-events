import Event from './Event';
import styled from './Events.module.css';
import useEventList from '../eventList/Evenvts';
import { useEffect } from 'react';

const Events = () => {
  const { data, error, loading } = useEventList();
  return (
    <div className={styled.events}>
      {data &&
        data.events.map((event) => (
          <Event
            key={event.id}
            title={event.title}
            date={event.startDate}
            photo={event.photo.url}
            localization={event.localization}
            //content={event.content.document}
            drinks={event.drinks}
            side={event.side}
          />
        ))}
    </div>
  );
};
export default Events;
