import React, { useState } from 'react';
import SvgGenerator from '../SvgGenerator/SvgGenerator';
import { useSelector, useDispatch } from 'react-redux';
import { setSort } from '../redux/slices/filterSlice';

const SORTS__ITEM = [
    { id: 0, title: 'популярности', sortProperty: 'rating' },
    { id: 1, title: 'цене', sortProperty: 'price' },
    { id: 2, title: 'алфавиту', sortProperty: 'title' },
];

function Sort({ onChangeDirection, direction }) {
    const sort = useSelector((state) => state.filter.sort);
    const dispatch = useDispatch();
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className="sort">
            <div className={direction ? 'sort__label' : 'sort__label sort-desc'}>
                <SvgGenerator id="arrow-top" />
                <b
                    onClick={() => {
                        onChangeDirection(!direction);
                    }}>
                    Сортировка&nbsp;по:
                </b>
                <span
                    onClick={() => {
                        setOpenModal(!openModal);
                    }}>
                    {sort.title}
                </span>
            </div>
            {openModal && (
                <div className="sort__popup">
                    <ul>
                        {SORTS__ITEM.map((item) => (
                            <li
                                key={item.id}
                                onClick={() => {
                                    dispatch(setSort(item));
                                    setOpenModal(false);
                                }}
                                className={sort.id === item.id ? 'active' : ''}>
                                {item.title}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
export default Sort;
