import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slices/cart/slice';
import filterSlice from './slices/filter/slice';
import pizzasSlice from './slices/pizzas/slice';

export const store = configureStore({
    reducer: { filter: filterSlice, cart: cartSlice, pizzas: pizzasSlice },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
