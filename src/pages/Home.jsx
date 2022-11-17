import React, { useState, useEffect, useContext } from 'react';
import { SearchContext } from '../App';

import Categories from '../componets/Categories';
import Sort from '../componets/Sort';
import PizzaSkeleton from '../componets/PizzaBlock/PizzaSkeleton';
import PizzaBlock from '../componets/PizzaBlock/PizzaBlock';
import Pagination from '../componets/Pagination';

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
    const [currentPage, setCurrentPage] = useState(1);
    const { searchValue } = useContext(SearchContext);

    useEffect(() => {
        setIsLoading(true);
        const category = categoryId !== 0 ? `&category=${categoryId}` : '';
        const directions = direction ? 'asc' : 'desc';
        const search = searchValue ? `&search=${searchValue}` : '';

        fetch(
            `https://6374eb8a48dfab73a4ece0b6.mockapi.io/items?page=${currentPage}&limit=4${category}&sortBy=${sortType.sortProperty}&order=${directions}${search}`,
        )
            .then((res) => {
                return res.json();
            })
            .then((arr) => {
                setPizzas(arr);
                setIsLoading(false);
            });
    }, [categoryId, sortType, direction, searchValue, currentPage]);

    const skeleton = [...new Array(6)].map((_, index) => <PizzaSkeleton key={index} />);

    const pizzaItems = pizzas.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />);

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
                    }}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">{isLoading ? skeleton : pizzaItems}</div>
            <Pagination
                onChangePage={(number) => {
                    setCurrentPage(number);
                }}
            />
        </div>
    );
}
export default Home;
