import Image from 'next/image'
import HeroImg from '../public/mainpic.jpeg'
import styles from './HeroPic.module.css'

const HeroPic= () =>{
    return(
        <div className={styles.contianer} >
        <Image width={1360} height={400} src={HeroImg} alt="Concerts"/>
        </div>
    )
}

export default HeroPic