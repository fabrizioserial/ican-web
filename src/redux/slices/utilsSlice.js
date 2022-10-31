import { createSlice } from '@reduxjs/toolkit';
import { ModalTypeEnum } from '../../utils/utils';

const initialState = {
	modalOpen: true,
	modalType: ModalTypeEnum.DAILY_MODAL,
	reportId: '8330c74a-1693-4fc0-9a24-37fd70bb30cb',
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
