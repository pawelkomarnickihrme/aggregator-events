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
        <div className={styles.logo}>
          <Image alt='logo' src={logo} />
        </div>
        <Search />
        <div className={styles.buttonLogIn}>
          <Button>Zaloguj się</Button>
        </div>
        <div className={styles.buttonAdd}>
          <Button>Dodaj</Button>
        </div>
      </div>
    </header>
  );
};
export default Header;
