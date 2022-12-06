import React from 'react';
import { useNavigate } from 'react-router-dom';

import cartEmptyImg from '../assets/img/empty-cart.png';

const CartEmpty: React.FC = () => {
    const nav = useNavigate();
    return (
        <div className="cart cart--empty">
            <h2>
                Корзина пустая <span>😕</span>
            </h2>
            <p>
                Вероятней всего, вы не заказывали ещё пиццу.
                <br />
                Для того, чтобы заказать пиццу, перейди на главную страницу.
            </p>
            <img src={cartEmptyImg} alt="Empty cart" />
            <div
                onClick={() => {
                    nav(-1);
                }}
                className="button button--black">
                <span>Вернуться назад</span>
            </div>
        </div>
    );
};
export default CartEmpty;
