import { RootState } from './../../store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { FilterSliceState, SortPropertyEnum, Sort } from './types';

const initialState: FilterSliceState = {
    categoryId: 0,
    pageCount: 1,
    direction: true,
    searchValue: '',
    sort: {
        id: 0,
        title: 'популярности',
        sortProperty: SortPropertyEnum.RATING,
    },
};

export const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategoryId(state, action: PayloadAction<number>) {
            state.categoryId = action.payload;
            state.pageCount = 1;
        },
        setSort(state, action: PayloadAction<Sort>) {
            state.sort = action.payload;
        },
        setSearchValue(state, action: PayloadAction<string>) {
            state.searchValue = action.payload;
        },
        setPageCount(state, action: PayloadAction<number>) {
            state.pageCount = action.payload;
        },
        setPageDirections(state, action: PayloadAction<boolean>) {
            state.direction = action.payload;
        },
        setFilters(state, action: PayloadAction<FilterSliceState>) {
            state.pageCount = +action.payload.pageCount;
            state.categoryId = +action.payload.categoryId;
            state.sort = action.payload.sort;
            state.direction = action.payload.direction;
        },
    },
});

export const {
    setCategoryId,
    setSort,
    setPageCount,
    setPageDirections,
    setFilters,
    setSearchValue,
} = filterSlice.actions;
export default filterSlice.reducer;
