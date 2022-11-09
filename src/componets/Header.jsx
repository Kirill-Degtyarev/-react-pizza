import React from 'react';
import SvgGenerator from '../SvgGenerator/SvgGenerator';

function Header() {
    return (
        <div className="header">
            <div className="container">
                <div className="header__logo">
                    <SvgGenerator id="pizza-logo" />
                    <div>
                        <h1>React Pizza</h1>
                        <p>самая вкусная пицца во вселенной</p>
                    </div>
                </div>
                <div className="header__cart">
                    <a href="/cart.html" className="button button--cart">
                        <span>520 ₽</span>
                        <div className="button__delimiter"></div>
                        <SvgGenerator id="cart" />
                        <span>3</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
export default Header;
