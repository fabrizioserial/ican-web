import { createSlice } from '@reduxjs/toolkit';
import { ModalTypeEnum } from '../../utils/utils';

const initialState = {
	modalOpen: true,
	modalType: ModalTypeEnum.WEEKLY_MODAL,
	reportId: 'c36c2351-d835-493a-a513-7590b97d9e8e',
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
		setReportId: (state, action) => {
			state.reportId = action.payload;
		},
	},
});

export const { setModalOpen, closeModal } = utilsSlice.actions;
export default utilsSlice.reducer;
