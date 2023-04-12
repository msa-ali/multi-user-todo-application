import { configureStore } from '@reduxjs/toolkit';
import {useSelector, useDispatch, TypedUseSelectorHook} from 'react-redux';
import tasksReducer from './features/task';
import usersReducer from './features/user';

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        users: usersReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState>  = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;