import type { NextPage } from 'next';
import styles from './Header.module.css';
import Image from 'next/image';
import logo from '../../public/logo.png';
import Search from './Search/Search';
import Button from '../Button/Button';

const Header: NextPage = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoAndSearch}>
          <div className={styles.logo}>
          <Image alt='logo' src={logo} width={113} height={53} />
        </div>
        <Search />
        </div>
        
        <div className={styles.buttons}>
          <span className={styles.button}><Button>Zaloguj się</Button></span>
          <span  className={styles.button}><Button>Dodaj</Button></span>
          
        </div>
      
      </div>
    </header>
  );
};
export default Header;
