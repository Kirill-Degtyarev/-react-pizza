import React from 'react';
import { useNavigate } from 'react-router-dom';
import SvgGenerator from '../SvgGenerator/SvgGenerator';
function Cart() {
    const nav = useNavigate();
    return (
        <div class="container container--cart">
            <div class="cart">
                <div class="cart__top">
                    <h2 class="content__title">
                        <SvgGenerator id="basket-black" />
                        Корзина
                    </h2>
                    <div class="cart__clear">
                        <SvgGenerator id="cart-clear" />
                        <span>Очистить корзину</span>
                    </div>
                </div>
                <div class="content__items">
                    <div class="cart__item">
                        <div class="cart__item-img">
                            <img
                                class="pizza-block__image"
                                src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                                alt="Pizza"
                            />
                        </div>
                        <div class="cart__item-info">
                            <h3>Сырный цыпленок</h3>
                            <p>тонкое тесто, 26 см.</p>
                        </div>
                        <div class="cart__item-count">
                            <div class="button button--outline button--circle cart__item-count-minus">
                                <SvgGenerator id="minus" />
                            </div>
                            <b>2</b>
                            <div class="button button--outline button--circle cart__item-count-plus">
                                <SvgGenerator id="plus" />
                            </div>
                        </div>
                        <div class="cart__item-price">
                            <b>770 ₽</b>
                        </div>
                        <div class="cart__item-remove">
                            <div class="button button--outline button--circle">
                                <SvgGenerator id="remove" />
                            </div>
                        </div>
                    </div>
                    <div class="cart__item">
                        <div class="cart__item-img">
                            <img
                                class="pizza-block__image"
                                src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                                alt="Pizza"
                            />
                        </div>
                        <div class="cart__item-info">
                            <h3>Сырный цыпленок</h3>
                            <p>тонкое тесто, 26 см.</p>
                        </div>
                        <div class="cart__item-count">
                            <div class="button button--outline button--circle cart__item-count-minus">
                                <SvgGenerator id="minus" />
                            </div>
                            <b>2</b>
                            <div class="button button--outline button--circle cart__item-count-plus">
                                <SvgGenerator id="plus" />
                            </div>
                        </div>
                        <div class="cart__item-price">
                            <b>770 ₽</b>
                        </div>
                        <div class="cart__item-remove">
                            <div class="button button--outline button--circle">
                                <SvgGenerator id="remove" />
                            </div>
                        </div>
                    </div>
                    <div class="cart__item">
                        <div class="cart__item-img">
                            <img
                                class="pizza-block__image"
                                src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                                alt="Pizza"
                            />
                        </div>
                        <div class="cart__item-info">
                            <h3>Сырный цыпленок</h3>
                            <p>тонкое тесто, 26 см.</p>
                        </div>
                        <div class="cart__item-count">
                            <div class="button button--outline button--circle cart__item-count-minus">
                                <SvgGenerator id="minus" />
                            </div>
                            <b>2</b>
                            <div class="button button--outline button--circle cart__item-count-plus">
                                <SvgGenerator id="plus" />
                            </div>
                        </div>
                        <div class="cart__item-price">
                            <b>770 ₽</b>
                        </div>
                        <div class="cart__item-remove">
                            <div class="button button--outline button--circle">
                                <SvgGenerator id="remove" />
                            </div>
                        </div>
                    </div>
                    <div class="cart__item">
                        <div class="cart__item-img">
                            <img
                                class="pizza-block__image"
                                src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                                alt="Pizza"
                            />
                        </div>
                        <div class="cart__item-info">
                            <h3>Сырный цыпленок</h3>
                            <p>тонкое тесто, 26 см.</p>
                        </div>
                        <div class="cart__item-count">
                            <div class="button button--outline button--circle cart__item-count-minus">
                                <SvgGenerator id="minus" />
                            </div>
                            <b>2</b>
                            <div class="button button--outline button--circle cart__item-count-plus">
                                <SvgGenerator id="plus" />
                            </div>
                        </div>
                        <div class="cart__item-price">
                            <b>770 ₽</b>
                        </div>
                        <div class="cart__item-remove">
                            <div class="button button--outline button--circle">
                                <SvgGenerator id="remove" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cart__bottom">
                    <div class="cart__bottom-details">
                        <span>
                            Всего пицц: <b>3 шт.</b>
                        </span>
                        <span>
                            Сумма заказа: <b>900 ₽</b>
                        </span>
                    </div>
                    <div class="cart__bottom-buttons">
                        <div
                            onClick={() => {
                                nav(-1);
                            }}
                            class="button button--outline button--add go-back-btn">
                            <SvgGenerator id="go-back" />

                            <span>Вернуться назад</span>
                        </div>
                        <div class="button pay-btn">
                            <span>Оплатить сейчас</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Cart;
