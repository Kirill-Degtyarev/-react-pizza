import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../../redux/slices/cart/slice';
import { CartItem } from '../../redux/slices/cart/types';
import { RootState } from '../../redux/store';

import SvgGenerator from '../../SvgGenerator/SvgGenerator';

type PizzaBlockProps = {
    id: string;
    imageUrl: string;
    title: string;
    types: number[];
    sizes: number[];
    price: number;
};

const PizzaBlock: React.FC<PizzaBlockProps> = ({ id, imageUrl, title, types, sizes, price }) => {
    const cartItem = useSelector((state: RootState) =>
        state.cart.items.find((obj) => obj.id === id),
    );
    const dispatch = useDispatch();

    const [activeType, setActiveType] = useState(0);
    const [activeSize, setActiveSize] = useState(0);
    const typeNames = ['тонкое', 'традиционное'];

    const addedCount = cartItem ? cartItem.count : 0;

    const onClickAdd = () => {
        const item: CartItem = {
            id,
            title,
            price,
            imageUrl,
            type: typeNames[activeType],
            size: sizes[activeSize],
            count: 0,
        };
        dispatch(addItem(item));
    };

    return (
        <div className="pizza-block-wrapper">
            <div className="pizza-block">
                <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
                <h4 className="pizza-block__title">{title}</h4>
                <div className="pizza-block__selector">
                    <ul>
                        {types.map((typeId) => (
                            <li
                                key={typeId}
                                onClick={() => {
                                    setActiveType(typeId);
                                }}
                                className={activeType === typeId ? 'active' : ''}>
                                {typeNames[typeId]}
                            </li>
                        ))}
                    </ul>
                    <ul>
                        {sizes.map((size, i) => (
                            <li
                                key={i}
                                onClick={() => {
                                    setActiveSize(i);
                                }}
                                className={activeSize === i ? 'active' : ''}>
                                {size} см.
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="pizza-block__bottom">
                    <div className="pizza-block__price">от {price}₽</div>
                    <button onClick={onClickAdd} className="button button--outline button--add">
                        <SvgGenerator id="plus" />
                        <span>Добавить</span>
                        {addedCount > 0 ? <i>{addedCount}</i> : ''}
                    </button>
                </div>
            </div>
        </div>
    );
};
export default PizzaBlock;
