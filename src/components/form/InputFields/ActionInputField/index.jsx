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
import { actionTypeEnum } from '../../../../utils/utils';
import { addNewMedication } from '../../../../redux/slices/treatmentSlice';

const ActionInputField = ({ index, label, handleClick }) => {
	const dispatch = useDispatch();
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
			default:
				handleClick();
				break;
		}
	};

	return (
		<Button
			className="action"
			key={index}
			text={label}
			disabled={true}
			icon={<PlusCircelIcon />}
			onClick={onClick}
		/>
	);
};

export default ActionInputField;
