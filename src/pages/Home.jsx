import React, { useState, useEffect, useContext, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../App';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId, setPageCount, setFilters } from '../redux/slices/filterSlice';
import axios from 'axios';
import qs from 'qs';

import Categories from '../componets/Categories';
import Sort from '../componets/Sort';
import { SORTS__ITEM } from '../componets/Sort';
import PizzaSkeleton from '../componets/PizzaBlock/PizzaSkeleton';
import PizzaBlock from '../componets/PizzaBlock/PizzaBlock';
import Pagination from '../componets/Pagination';

function Home() {
    const { categoryId, sort, pageCount, direction } = useSelector((state) => state.filter);
    const sortProperty = sort.sortProperty;
    const dispatch = useDispatch();

    const isSearch = useRef(false);
    const isMounted = useRef(false);
    const [isLoading, setIsLoading] = useState(true);
    const [pizzas, setPizzas] = useState([]);
    const { searchValue } = useContext(SearchContext);

    const nav = useNavigate();

    const fetchPizzas = useCallback(() => {
        setIsLoading(true);
        const category = categoryId !== 0 ? `&category=${categoryId}` : '';
        const directions = direction ? 'asc' : 'desc';
        const search = searchValue ? `&search=${searchValue}` : '';
        axios
            .get(
                `https://6374eb8a48dfab73a4ece0b6.mockapi.io/items?page=${pageCount}&sortBy=${sortProperty}&limit=4${category}&order=${directions}${search}`,
            )
            .then((res) => {
                setPizzas(res.data);
                setIsLoading(false);
            });
    }, [categoryId, direction, sortProperty, searchValue, pageCount]);

    useEffect(() => {
        if (isMounted.current) {
            const directions = direction ? 'asc' : 'desc';
            const queryString = qs.stringify({
                sortProperty: sort.sortProperty,
                categoryId,
                directions,
                pageCount,
            });
            nav(`?${queryString}`);
        }
        isMounted.current = true;
    }, [categoryId, direction, sort, pageCount, nav]);

    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1));
            const sort = SORTS__ITEM.find((obj) => obj.sortProperty === params.sortProperty);
            dispatch(setFilters({ ...params, sort }));
            isSearch.current = true;
        }
    }, [dispatch]);

    useEffect(() => {
        if (!isSearch.current) {
            fetchPizzas();
        }
        isSearch.current = false;
    }, [fetchPizzas]);

    const onChangeCategory = (id) => {
        dispatch(setCategoryId(id));
    };

    const skeleton = [...new Array(6)].map((_, index) => <PizzaSkeleton key={index} />);

    const pizzaItems = pizzas.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />);

    return (
        <div className="container">
            <div className="content__top">
                <Categories categoryId={categoryId} onChangeCategory={onChangeCategory} />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">{isLoading ? skeleton : pizzaItems}</div>
            <Pagination
                currentPage={pageCount}
                onChangePage={(number) => {
                    dispatch(setPageCount(number));
                }}
            />
        </div>
    );
}
export default Home;
