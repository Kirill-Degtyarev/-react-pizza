import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCart } from '../redux/slices/cart/selectors';

import Search from './Search';

import SvgGenerator from '../SvgGenerator/SvgGenerator';

const Header: React.FC = () => {
    const { totalPrice, items } = useSelector(selectCart);
    const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0);
    const { pathname } = useLocation();
    const isMounted = useRef(false);

    useEffect(() => {
        if (isMounted.current) {
            const json = JSON.stringify(items);
            localStorage.setItem('cart', json);
            localStorage.setItem('totalPrice', String(totalPrice));
        }
        isMounted.current = true;
    }, [items]);

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
                {pathname !== '/cart' && (
                    <div className="header__cart">
                        <Link to="/cart" className="button button--cart">
                            <span>{totalPrice.toLocaleString()} ₽</span>
                            <div className="button__delimiter"></div>
                            <SvgGenerator id="cart" />
                            <span>{totalCount}</span>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Header;
