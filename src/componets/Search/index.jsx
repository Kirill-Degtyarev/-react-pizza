import React, { useContext } from 'react';
import { SearchContext } from '../../App';

import styles from './Search.module.scss';

function Search() {
    const { searchValue, setSearchValue } = useContext(SearchContext);
    return (
        <input
            onChange={(e) => {
                setSearchValue(e.target.value);
            }}
            value={searchValue}
            className={styles.input}
            type="text"
            placeholder="Поиск пиццы"
        />
    );
}
export default Search;
