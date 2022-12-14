import React, { useState } from 'react';
import { StyledBox } from '../../common/styledCommonComponents';
import { ModalTypeEnum } from '../../utils/utils';
import Modal from './components/modals/Modal';
import WeeklyModal from './components/modals/WeeklyModal';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../redux/slices/utilsSlice';
import { useWeeklyQuestionsQuery } from '../../redux/api/homeApi';
import DailyModal from './components/modals/DailyModal';
import ContactModal from './components/modals/ContactModal';
import TreatmentModal from './components/modals/TreatmentModal';

export const withModal = (Component) => (props) => {
	const open = useSelector((state) => state.utilsSlice.modalOpen);
	const type = useSelector((state) => state.utilsSlice.modalType);

	const dispatch = useDispatch();

	const handleOnClose = () => {
		dispatch(closeModal());
	};

	const renderModal = () => {
		switch (type) {
			case ModalTypeEnum.WEEKLY_MODAL:
				return <WeeklyModal handleOnClose={handleOnClose} />;
			case ModalTypeEnum.DAILY_MODAL:
				return <DailyModal handleOnClose={handleOnClose} />;
			case ModalTypeEnum.CONTACT_MODAL:
				return <ContactModal handleOnClose={handleOnClose} />;
			case ModalTypeEnum.TREATMENT_MODAL:
				return <TreatmentModal handleOnClose={handleOnClose} />;
		}
	};

	const ModalContainer = () => {
		return (
			<>
				<StyledBox
					css={{
						position: 'fixed',
						top: 0,
						left: 0,
						width: '100vw',
						height: '100vh',
						backgroundColor: 'rgba(24,24,24,0.4)',
						zIndex: 10,
					}}
				/>
				{renderModal()}
			</>
		);
	};

	return (
		<StyledBox
			css={{
				position: 'relative',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				maxHeight: '100vh',
			}}
		>
			<Component {...props} />
			{open && ModalContainer()}
		</StyledBox>
	);
};
