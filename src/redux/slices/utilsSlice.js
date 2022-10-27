import { createSlice } from '@reduxjs/toolkit';
import { ModalTypeEnum } from '../../utils/utils';

const initialState = {
	modalOpen: true,
	modalType: ModalTypeEnum.WEEKLY_MODAL,
};

export const utilsSlice = createSlice({
	name: 'utilsSlice',
	initialState,
	reducers: {
		setModalOpen: (state, action) => {
			state.modalOpen = action.payload.open;
			state.modalType = action.payload.type;
		},
		closeModal: (state) => {
			state.modalOpen = false;
		},
	},
});

export const { setModalOpen, closeModal } = utilsSlice.actions;
export default utilsSlice.reducer;
