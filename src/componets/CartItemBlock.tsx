import React from 'react';
import { useDispatch } from 'react-redux';
import { CartItem } from '../redux/slices/cart/types';
import { addItem, removeItem } from '../redux/slices/cart/slice';
import { minusItem } from '../redux/slices/cart/slice';
import SvgGenerator from '../SvgGenerator/SvgGenerator';

type CartItemProps = {
    id: string;
    title: string;
    imageUrl: string;
    type: string;
    size: number;
    count: number;
    price: number;
};

const CartItemBlock: React.FC<CartItemProps> = ({
    id,
    title,
    imageUrl,
    type,
    size,
    count,
    price,
}) => {
    const dispatch = useDispatch();

    const onClickPlus = () => {
        dispatch(addItem({ id } as CartItem));
    };

    const onClickMinus = () => {
        if (count !== 1) {
            dispatch(minusItem(id));
        }
    };

    const onCLickDelete = () => {
        dispatch(removeItem(id));
    };

    return (
        <div className="cart__item">
            <div className="cart__item-img">
                <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
            </div>
            <div className="cart__item-info">
                <h3>{title}</h3>
                <p>
                    {type} тесто, {size} см.
                </p>
            </div>
            <div className="cart__item-count">
                <div
                    className={`button button--outline button--circle cart__item-count-minus ${
                        count === 1 ? 'cart__item-count-disabled' : ''
                    }`}
                    onClick={onClickMinus}>
                    <SvgGenerator id="minus" />
                </div>
                <b>{count}</b>
                <div
                    className="button button--outline button--circle cart__item-count-plus"
                    onClick={onClickPlus}>
                    <SvgGenerator id="plus" />
                </div>
            </div>
            <div className="cart__item-price">
                <b>{price * count} ₽</b>
            </div>
            <div className="cart__item-remove">
                <div className="button button--outline button--circle" onClick={onCLickDelete}>
                    <SvgGenerator id="remove" />
                </div>
            </div>
        </div>
    );
};
export default CartItemBlock;
