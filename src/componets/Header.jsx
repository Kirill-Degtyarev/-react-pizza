import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Search from './Search';

import SvgGenerator from '../SvgGenerator/SvgGenerator';

function Header() {
    const { totalPrice, items } = useSelector((state) => state.cart);
    const totalCount = items.reduce((sum, item) => sum + item.count, 0);
    return (
        <div className="header">
            <div className="container">
                <Link to="/">
                    <div className="header__logo">
                        <SvgGenerator id="pizza-logo" />
                        <div>
                            <h1 className="title-desktop">React Pizza</h1>
                            <h1 className="title-mobile">RP</h1>
                            <p>самая вкусная пицца во вселенной</p>
                        </div>
                    </div>
                </Link>
                <Search />
                <div className="header__cart">
                    <Link to="/cart" className="button button--cart">
                        <span>{totalPrice} ₽</span>
                        <div className="button__delimiter"></div>
                        <SvgGenerator id="cart" />
                        <span>{totalCount}</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default Header;
