import React from 'react';
import { Link } from 'react-router-dom';

import Search from './Search';

import SvgGenerator from '../SvgGenerator/SvgGenerator';

function Header() {
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
                        <span>520 ₽</span>
                        <div className="button__delimiter"></div>
                        <SvgGenerator id="cart" />
                        <span>3</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default Header;
