import Image from 'next/image'
import style from './Event.module.css';
import {newEvent} from './Interface/newEvent'
import { useState, useEffect } from 'react';



const Event = ({title,date,photo,localization,content,drinks,side}:newEvent) => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return(
    <>
     {domLoaded && 
      (<div className={style.event}>
        <div className = {style.image}>
          <Image loader={() => photo} src={photo} height={339} width={356} alt={title}/>
        </div>
        <div className={style.prev}>
          <h2 className={style.title}>{title}</h2>
          <div className={style.date}>{date}</div>
          <div className={style.localization}>{localization}</div>
          <div className={style.content}>{content}</div>
          <div className={style.drinks}>{drinks}</div>
          <div className={style.side}>{side}</div>
        </div>
      </div>)}
  </>
  )
}
export default Event;
