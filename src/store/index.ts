import { configureStore } from '@reduxjs/toolkit';

import modalReducer from './slices/modal';

export const store = configureStore({
    reducer: {
        modal: modalReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
