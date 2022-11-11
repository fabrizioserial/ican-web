import React from 'react';
import Modal from '../Modal';
import {
	StyledBox,
	StyledP,
} from '../../../../../common/styledCommonComponents';
import TreatmentIcon from '../../../../../assets/TreatmentIcon';
import TreatmentBody from './TreatmentBody';
import { useDispatch } from 'react-redux';
import { clearTreatmentModal } from '../../../../../redux/slices/treatmentSlice';

const TreatmentModal = ({ handleOnClose }) => {
	const dispatch = useDispatch();

	const OnClose = async () => {
		await dispatch(clearTreatmentModal());
		handleOnClose();
	};

	return (
		<Modal
			onClose={OnClose}
			header={
				<StyledBox
					css={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
					}}
				>
					<StyledBox
						css={{
							width: '48px',
							height: '48px',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							borderRadius: '50px',
							backgroundColor: '#EAE0FF',
						}}
					>
						<TreatmentIcon />
					</StyledBox>
					<StyledP css={{ fontSize: '20px', marginLeft: '15px' }}>
						Tratamiento
					</StyledP>
				</StyledBox>
			}
			body={<TreatmentBody onClose={OnClose} />}
		/>
	);
};

export default TreatmentModal;
