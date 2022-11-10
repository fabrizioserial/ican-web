import { createSlice } from '@reduxjs/toolkit';
import { ModalTypeEnum } from '../../utils/utils';
import { authSlice } from './authSlice';

const initialState = {
	modalOpen: false,
	modalType: undefined,
	// 'c36c2351-d835-493a-a513-7590b97d9e8e'
	// reportId: '0ce21e6b-68cb-4ca7-b26a-fecf4d763748',
	reportId: '',
	patientId: '',
};

export const utilsSlice = createSlice({
	name: 'utilsSlice',
	initialState,
	reducers: {
		setModalOpen: (state, action) => {
			state.modalOpen = action.payload.open;
			state.modalType = action.payload.type;
			state.reportId = action.payload?.id;
			state.patientId = action.payload?.patientId;
		},
		closeModal: (state) => {
			state.modalOpen = false;
			state.modalType = undefined;
			state.reportId = '';
			state.patientId = '';
		},
		setReportId: (state, action) => {
			state.reportId = action.payload;
		},
	},
	extraReducers: (builder) =>
		builder.addCase(authSlice.actions.logout, (state) => {
			state = initialState;
		}),
});

export const { setModalOpen, closeModal, setReportId } = utilsSlice.actions;
export default utilsSlice.reducer;
