import React, { useEffect, useRef, useState } from 'react';
import SvgGenerator from '../SvgGenerator/SvgGenerator';
import { useSelector, useDispatch } from 'react-redux';
import { setSort, setPageDirections } from '../redux/slices/filterSlice';

export const SORTS__ITEM = [
    { id: 0, title: 'популярности', sortProperty: 'rating' },
    { id: 1, title: 'цене', sortProperty: 'price' },
    { id: 2, title: 'алфавиту', sortProperty: 'title' },
];

function Sort() {
    const { sort, direction } = useSelector((state) => state.filter);
    const dispatch = useDispatch();
    const [openModal, setOpenModal] = useState(false);
    const sortRef = useRef();

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!e.path.includes(sortRef.current)) {
                setOpenModal(false);
            }
        };

        document.body.addEventListener('click', handleClickOutside);

        return () => {
            document.body.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div ref={sortRef} className="sort">
            <div className={direction ? 'sort__label' : 'sort__label sort-desc'}>
                <SvgGenerator id="arrow-top" />
                <b
                    onClick={() => {
                        dispatch(setPageDirections(!direction));
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
