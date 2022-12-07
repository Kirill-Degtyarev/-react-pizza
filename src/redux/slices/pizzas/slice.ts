import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { SearchPizzaParams, Pizza, PizzasSliceState, Status } from './types';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
    'pizza/fetchPizzasStatus',
    async (params) => {
        const { category, directions, search, pageCount, sortBy } = params;
        const { data } = await axios.get<Pizza[]>(
            `https://6374eb8a48dfab73a4ece0b6.mockapi.io/items?page=${pageCount}&sortBy=${sortBy}&limit=4${category}&order=${directions}${search}`,
        );
        return data;
    },
);

const initialState: PizzasSliceState = {
    items: [],
    status: Status.LOADING,
};

export const pizzasSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setItems(state, action: PayloadAction<Pizza[]>) {
            state.items = action.payload;
        },
    },

    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.pending, (state) => {
            state.status = Status.LOADING;
            state.items = [];
        });
        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
            state.items = action.payload;
            state.status = Status.SUCCESS;
        });
        builder.addCase(fetchPizzas.rejected, (state) => {
            state.status = Status.ERROR;
            state.items = [];
        });
    },
});

export const { setItems } = pizzasSlice.actions;
export default pizzasSlice.reducer;
