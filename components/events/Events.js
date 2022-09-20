import Event from './Event';
import styled from './Events.module.css';
import {simpleEvent} from './simpleEvent'

const Events = () => {
  return (
    <div className={styled.events}>
      <Event title={simpleEvent.title} date={simpleEvent.date} photo={simpleEvent.photo} localization={simpleEvent.localization}content={simpleEvent.content}drinks={simpleEvent.drinks}side={simpleEvent.side} />
      <Event title={simpleEvent.title} date={simpleEvent.date} photo={simpleEvent.photo} localization={simpleEvent.localization}content={simpleEvent.content}drinks={simpleEvent.drinks}side={simpleEvent.side} />
      <Event title={simpleEvent.title} date={simpleEvent.date} photo={simpleEvent.photo} localization={simpleEvent.localization}content={simpleEvent.content}drinks={simpleEvent.drinks}side={simpleEvent.side} />
      <Event title={simpleEvent.title} date={simpleEvent.date} photo={simpleEvent.photo} localization={simpleEvent.localization}content={simpleEvent.content}drinks={simpleEvent.drinks}side={simpleEvent.side} />
      
    </div>
  );
};
export default Events;
