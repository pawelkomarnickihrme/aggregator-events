import Image from 'next/image'
import style from './Events.module.css';
import {newEvent} from './Interface/newEvent'



const Event = ({title,date,photo,localization,content,drinks,side}:newEvent) => {
  return <div className={style.event}>
    {/* {<div><Image loader={() => photo} src={photo} height={339} width={356} alt={title}/></div>} */}
    <h2>{title}</h2>
    <div>{date}</div>
    <div>{localization}</div>
    <div>{content}</div>
    <div>{drinks}</div>
    <div>{side}</div>
  </div>;
};
export default Event;
