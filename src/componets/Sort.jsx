import React, { useState } from 'react';
import SvgGenerator from '../SvgGenerator/SvgGenerator';

const SORTS__ITEM = [
    { id: 0, title: 'популярности', sortProperty: 'rating' },
    { id: 1, title: 'цене', sortProperty: 'price' },
    { id: 2, title: 'алфавиту', sortProperty: 'title' },
];

function Sort({ sortType, direction, onClickType, onClickDirection }) {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className="sort">
            <div className="sort__label">
                <SvgGenerator
                    className={direction ? '' : 'sort-desc'}
                    id="arrow-top"
                    onClick={() => {
                        onClickDirection(!direction);
                    }}
                />
                <b>Сортировка&nbsp;по:</b>
                <span
                    onClick={() => {
                        setOpenModal(!openModal);
                    }}>
                    {sortType.title}
                </span>
            </div>
            {openModal && (
                <div className="sort__popup">
                    <ul>
                        {SORTS__ITEM.map((item) => (
                            <li
                                key={item.id}
                                onClick={() => {
                                    onClickType(item);
                                    setOpenModal(false);
                                }}
                                className={sortType.id === item.id ? 'active' : ''}>
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
