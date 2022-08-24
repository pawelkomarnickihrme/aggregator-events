import type { NextPage } from 'next'
import styles from './Header.module.css'
import Image from 'next/image'
import logo from '../../public/logo.png'



const Header: NextPage = () => {
    return (
        <header className={styles.header}>
        <div className={styles.container}>
           
           <div className={styles.logo}><Image alt="logo" className={styles.img} src={logo} width={76}height={60}/></div>
        </div>
        </header>
   
    )
  }
export default Header