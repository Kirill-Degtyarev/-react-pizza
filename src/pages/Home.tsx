import React, { useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../redux/store';
import { setCategoryId, setPageCount, setFilters } from '../redux/slices/filter/slice';
import { selectFilter } from '../redux/slices/filter/selectors';
import { fetchPizzas } from '../redux/slices/pizzas/slice';
import { SearchPizzaParams } from '../redux/slices/pizzas/types';
import qs from 'qs';

import Categories from '../componets/Categories';
import Sort from '../componets/SortPopup';
import { SORTS__ITEM } from '../componets/SortPopup';
import PizzaSkeleton from '../componets/PizzaBlock/PizzaSkeleton';
import PizzaBlock from '../componets/PizzaBlock/PizzaBlock';
import Pagination from '../componets/Pagination';
import { RootState } from '../redux/store';

const Home: React.FC = () => {
    const { categoryId, sort, pageCount, direction, searchValue } = useSelector(selectFilter);
    const { items, status } = useSelector((state: RootState) => state.pizzas);
    const sortBy = sort.sortProperty;
    const dispatch = useAppDispatch();
    const directions = direction ? 'asc' : 'desc';
    const isSearch = useRef(false);
    const isMounted = useRef(false);

    const nav = useNavigate();

    const getPizzas = useCallback(async () => {
        const category = categoryId !== 0 ? `&category=${categoryId}` : '';
        const search = searchValue ? `&search=${searchValue}` : '';
        dispatch(
            fetchPizzas({
                category,
                directions,
                search,
                pageCount: String(pageCount),
                sortBy,
            }),
        );
    }, [categoryId, directions, sortBy, searchValue, pageCount, dispatch]);

    // useEffect(() => {
    //     if (isMounted.current) {
    //         const queryString = qs.stringify({
    //             sortProperty: sort.sortProperty,
    //             categoryId,
    //             directions,
    //             pageCount,
    //         });
    //         nav(`?${queryString}`);
    //     }
    //     isMounted.current = true;
    // }, [categoryId, directions, sort, pageCount, nav]);

    // useEffect(() => {
    //     if (window.location.search) {
    //         const params = qs.parse(
    //             window.location.search.substring(1),
    //         ) as unknown as SearchPizzaParams;
    //         const sort = SORTS__ITEM.find((obj) => obj.sortProperty === params.sortBy);

    //         dispatch(
    //             setFilters({
    //                 categoryId: +params.category,
    //                 pageCount: +params.pageCount,
    //                 direction: params.directions === 'asc',
    //                 searchValue: params.search,
    //                 sort: sort || SORTS__ITEM[0],
    //             }),
    //         );
    //         isSearch.current = false;
    //     }
    // }, [dispatch]);

    useEffect(() => {
        // if (!isSearch.current) {
        getPizzas();
        // }
        // isSearch.current = false;
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
                        {status === 'success' ? pizzaItems : skeleton}
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
