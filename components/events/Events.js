import Event from './Event';
import styled from './Events.module.css';

const Events = () => {
  return (
    <div className={styled.events}>
      <Event />
      <Event />
      <Event />
    </div>
  );
};
export default Events;
