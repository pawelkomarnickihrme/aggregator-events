import styles from '../Header.module.css';
const Search = () => {
  return (
    <>
      <input
        type='text'
        name='search-field'
        id='search-field'
        className={styles.searchInput}
        placeholder='Szukaj...'
      />
    </>
  );
};
export default Search;
