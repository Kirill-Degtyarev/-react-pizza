import React, { useCallback, useContext, useState } from 'react';
import { SearchContext } from '../../App';
import debounce from 'lodash.debounce';

import styles from './Search.module.scss';

function Search() {
    const [value, setValue] = useState('');
    const { setSearchValue } = useContext(SearchContext);

    const onChangeInput = (e) => {
        setValue(e.target.value);
        updateSeatchInput(e.target.value);
    };
    // eslint-disable-next-line
    const updateSeatchInput = useCallback(
        debounce((value) => {
            setSearchValue(value);
        }, 1000),
        [],
    );

    return (
        <input
            onChange={onChangeInput}
            value={value}
            className={styles.input}
            type="text"
            placeholder="Поиск пиццы"
        />
    );
}
export default Search;
