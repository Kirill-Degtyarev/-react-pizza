import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../redux/slices/filterSlice';
import debounce from 'lodash.debounce';

import styles from './Search.module.scss';

function Search() {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    const onChangeInput = (e) => {
        setValue(e.target.value);
        updateSeatchInput(e.target.value);
    };
    // eslint-disable-next-line
    const updateSeatchInput = useCallback(
        debounce((value) => {
            dispatch(setSearchValue(value));
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
