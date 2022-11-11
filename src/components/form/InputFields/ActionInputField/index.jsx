import React from 'react';
import { useDispatch } from 'react-redux';
import PlusCircelIcon from '../../../../assets/PlusCircleIcon';
import Button from '../../../../common/components/button/Button';
import {
	addBiomarkers,
	addSetBacks,
	addTreatment,
	addTreatmentMedication,
} from '../../../../redux/slices/formSlice';
import { actionTypeEnum, ModalTypeEnum } from '../../../../utils/utils';
import { addNewMedication } from '../../../../redux/slices/treatmentSlice';
import { useNavigate, useParams } from 'react-router';
import { setModalOpen } from '../../../../redux/slices/utilsSlice';
import classNames from 'classnames';

const ActionInputField = ({ index, label, handleClick, values, classname }) => {
	const dispatch = useDispatch();
	const navigation = useNavigate();
	const { patientId } = useParams();
	const onClick = () => {
		switch (handleClick()) {
			case actionTypeEnum.ADD_BIOMARKER:
				dispatch(addBiomarkers());
				break;
			case actionTypeEnum.ADD_SETBACK:
				dispatch(addSetBacks());
				break;
			case actionTypeEnum.ADD_TREATMENT:
				dispatch(addTreatment());
				break;
			case actionTypeEnum.ADD_MEDICATION:
				dispatch(addTreatmentMedication());
				break;
			case actionTypeEnum.ADD_MEDICATION_TREATMENT_MODAL:
				dispatch(addNewMedication({ edited: true }));
				break;
			case actionTypeEnum.FINISH_TREATMENT:
				navigation(`/profile/${patientId}`);
				dispatch(
					setModalOpen({
						open: true,
						type: ModalTypeEnum.TREATMENT_MODAL,
						id: values.treatmentId,
						patientId: patientId,
					}),
				);
				break;
			default:
				handleClick();
				break;
		}
	};

	return (
		<Button
			className={classNames('', { action: !classname, rejected: classname })}
			key={index}
			text={label}
			disabled={true}
			icon={classname ? <></> : <PlusCircelIcon />}
			onClick={onClick}
		/>
	);
};

export default ActionInputField;
