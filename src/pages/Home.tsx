import React, { useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId, setPageCount, setFilters, selectFilter } from '../redux/slices/filterSlice';
import { fetchPizzas } from '../redux/slices/pizzasSlice';
import qs from 'qs';

import Categories from '../componets/Categories';
import Sort from '../componets/Sort';
import { SORTS__ITEM } from '../componets/Sort';
import PizzaSkeleton from '../componets/PizzaBlock/PizzaSkeleton';
import PizzaBlock from '../componets/PizzaBlock/PizzaBlock';
import Pagination from '../componets/Pagination';

const Home: React.FC = () => {
    const { categoryId, sort, pageCount, direction, searchValue } = useSelector(selectFilter);
    const { items, status } = useSelector((state: any) => state.pizzas);
    const sortProperty = sort.sortProperty;
    const dispatch = useDispatch();
    const directions = direction ? 'asc' : 'desc';
    const isSearch = useRef(false);
    const isMounted = useRef(false);

    const nav = useNavigate();

    const getPizzas = useCallback(async () => {
        const category = categoryId !== 0 ? `&category=${categoryId}` : '';
        const search = searchValue ? `&search=${searchValue}` : '';
        dispatch(
            //@ts-ignore
            fetchPizzas({ category, directions, search, pageCount, sortProperty }),
        );
    }, [categoryId, directions, sortProperty, searchValue, pageCount, dispatch]);

    useEffect(() => {
        if (isMounted.current) {
            const queryString = qs.stringify({
                sortProperty: sort.sortProperty,
                categoryId,
                directions,
                pageCount,
            });
            nav(`?${queryString}`);
        }
        isMounted.current = true;
    }, [categoryId, directions, sort, pageCount, nav]);

    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1));
            const sort = SORTS__ITEM.find((obj) => obj.sortProperty === params.sortProperty);
            dispatch(setFilters({ ...params, sort }));
            isSearch.current = false;
        }
    }, [dispatch]);

    useEffect(() => {
        if (!isSearch.current) {
            getPizzas();
        }
        isSearch.current = false;
    }, [getPizzas]);

    const onChangeCategory = (id: number) => {
        dispatch(setCategoryId(id));
    };

    const skeleton = [...new Array(6)].map((_, index) => <PizzaSkeleton key={index} />);

    const pizzaItems = items.map((pizza: any) => (
        // <Link to={`/pizza/${pizza.id}`} key={pizza.id}>
        <PizzaBlock key={pizza.id} {...pizza} />
        // </Link>
    ));

    return (
        <div className="container">
            <div className="content__top">
                <Categories categoryId={categoryId} onChangeCategory={onChangeCategory} />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            {status === 'error' ? (
                <div className="content__error-info">
                    <h2>
                        Произошла ошибка <span>😕</span>
                    </h2>
                    <p>Не удалось получить пиццы</p>
                </div>
            ) : (
                <>
                    <div className="content__items">
                        {status === 'succes' ? pizzaItems : skeleton}
                    </div>
                    <Pagination
                        currentPage={pageCount}
                        onChangePage={(page: number) => {
                            dispatch(setPageCount(page));
                        }}
                    />
                </>
            )}
        </div>
    );
};
export default Home;
