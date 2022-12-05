import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzasStatus', async (params, thunkAPI) => {
    const { category, directions, search, pageCount, sortProperty } = params;
    const { data } = await axios.get(
        `https://6374eb8a48dfab73a4ece0b6.mockapi.io/items?page=${pageCount}&sortBy=${sortProperty}&limit=4${category}&order=${directions}${search}`,
    );
    return data;
});

const initialState = {
    items: [],
    status: 'loading',
};

export const pizzasSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload;
        },
    },

    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.pending, (state) => {
            state.status = 'loading';
            state.items = [];
        });
        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
            state.items = action.payload;
            state.status = 'succes';
        });
        builder.addCase(fetchPizzas.rejected, (state) => {
            state.status = 'error';
            state.items = [];
        });
    },
});

export const { setItems } = pizzasSlice.actions;
export default pizzasSlice.reducer;
