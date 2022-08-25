import styles from './Header.module.css'
const Search = () =>{
    return(
        <div>
            <label className={styles.visuallyHidden} htmlFor="header-search-input">Search for a product...</label>
            <input className={styles.searchInput}type="text" id="header-search-input" name="search" data-search="" autoComplete="off" autoCorrect="off" placeholder="Search for a product..." data-component-tracked-focused=""></input>
            <button type="submit" className={styles.seachButton} data-js-element="headerSearch_button" aria-label="Start search" title="Start search" ></button>
            
        </div>
    )
}
export default Search