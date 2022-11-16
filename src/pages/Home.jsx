import React, { useState, useEffect } from 'react';

import Categories from '../componets/Categories';
import Sort from '../componets/Sort';
import PizzaSkeleton from '../componets/PizzaBlock/PizzaSkeleton';
import PizzaBlock from '../componets/PizzaBlock/PizzaBlock';
import { Logger } from 'sass';

function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [pizzas, setPizzas] = useState([]);
    const [categoryId, setCategotyId] = useState(0);
    const [sortType, setSortType] = useState({
        id: 0,
        title: 'популярности',
        sortProperty: 'rating',
    });
    const [direction, setDirection] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch(
            `https://6374eb8a48dfab73a4ece0b6.mockapi.io/items?${
                categoryId !== 0 ? `category=${categoryId}` : ''
            }&sortBy=${sortType.sortProperty}&order=${direction ? 'asc' : 'desc'}`,
        )
            .then((res) => {
                return res.json();
            })
            .then((arr) => {
                setPizzas(arr);
                setIsLoading(false);
            });
    }, [categoryId, sortType, direction]);

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    categoryId={categoryId}
                    onClickCategory={(id) => {
                        setCategotyId(id);
                    }}
                />
                <Sort
                    sortType={sortType}
                    direction={direction}
                    onClickType={(sort) => {
                        setSortType(sort);
                    }}
                    onClickDirection={(dir) => {
                        setDirection(dir);
                        console.log(dir);
                    }}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading
                    ? [...new Array(6)].map((_, index) => <PizzaSkeleton key={index} />)
                    : pizzas.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)}
            </div>
        </div>
    );
}
export default Home;
