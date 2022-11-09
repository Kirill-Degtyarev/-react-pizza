import React, { useState } from 'react';
import SvgGenerator from '../SvgGenerator/SvgGenerator';

const SORTS__ITEM = [
    { id: 0, title: 'популярности' },
    { id: 1, title: 'цене' },
    { id: 2, title: 'алфавиту' },
];

function Sort() {
    const [openModal, setOpenModal] = useState(false);
    const [activeSort, setActiveSort] = useState(0);
    return (
        <div className="sort">
            <div className="sort__label">
                <SvgGenerator id="arrow-top" />
                <b>Сортировка по:</b>
                <span
                    onClick={() => {
                        setOpenModal(!openModal);
                    }}>
                    {SORTS__ITEM[activeSort].title}
                </span>
            </div>
            {openModal && (
                <div className="sort__popup">
                    <ul>
                        {SORTS__ITEM.map((item) => (
                            <li
                                key={item.id}
                                onClick={() => {
                                    setActiveSort(item.id);
                                    setOpenModal(false);
                                }}
                                className={activeSort === item.id ? 'active' : ''}>
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
