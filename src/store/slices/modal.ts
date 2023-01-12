import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

type State = {
    activeModal: string | null;
};

const initialState: State = {
    activeModal: null,
};

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        /**
         * Устанавливает состояние глобального попапа
         */
        setActiveModal: (
            state,
            action: PayloadAction<State['activeModal']>
        ) => {
            state.activeModal = action.payload;
        },
    },
});

export const { setActiveModal } = modalSlice.actions;

export default modalSlice.reducer;
