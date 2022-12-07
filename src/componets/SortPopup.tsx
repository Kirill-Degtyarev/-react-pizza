import React, { useEffect, useRef, useState } from 'react';
import SvgGenerator from '../SvgGenerator/SvgGenerator';
import { useSelector, useDispatch } from 'react-redux';
import { setSort, setPageDirections } from '../redux/slices/filter/slice';

import { selectFilter } from '../redux/slices/filter/selectors';
import { SortPropertyEnum } from '../redux/slices/filter/types';

type SortItem = {
    id: number;
    title: string;
    sortProperty: SortPropertyEnum;
};

type PopupClick = MouseEvent & {
    path: Node[];
};

export const SORTS__ITEM: SortItem[] = [
    { id: 0, title: 'популярности', sortProperty: SortPropertyEnum.RATING },
    { id: 1, title: 'цене', sortProperty: SortPropertyEnum.PRICE },
    { id: 2, title: 'алфавиту', sortProperty: SortPropertyEnum.TITLE },
];

const SortPopup: React.FC = () => {
    const { sort, direction } = useSelector(selectFilter);
    const dispatch = useDispatch();
    const [openModal, setOpenModal] = useState(false);
    const sortRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const _event = e as PopupClick;
            if (sortRef.current && !_event.path.includes(sortRef.current)) {
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
};
export default SortPopup;
