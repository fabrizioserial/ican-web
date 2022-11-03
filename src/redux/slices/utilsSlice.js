import { createSlice } from '@reduxjs/toolkit';
import { ModalTypeEnum } from '../../utils/utils';
import { authSlice } from "./authSlice"

const initialState = {
	modalOpen: false,
	modalType: undefined,
	// 'c36c2351-d835-493a-a513-7590b97d9e8e'
	reportId: undefined,
};

export const utilsSlice = createSlice({
	name: 'utilsSlice',
	initialState,
	reducers: {
		setModalOpen: (state, action) => {
			state.modalOpen = action.payload.open;
			state.modalType = action.payload.type;
			state.reportId = action.payload?.id;
		},
		closeModal: (state) => {
			state.modalOpen = false;
		},
		setReportId: (state, action) => {
			state.reportId = action.payload;
		},
	},
	extraReducers: (builder) => builder
		.addCase(authSlice.actions.logout, (state) => { state = initialState; })
});

export const { setModalOpen, closeModal, setReportId } = utilsSlice.actions;
export default utilsSlice.reducer;
