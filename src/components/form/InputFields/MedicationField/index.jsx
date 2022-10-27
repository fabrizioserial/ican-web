import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TrashIcon from '../../../../assets/TrashIcon';
import IconButton from '../../../../common/components/iconButton';
import { StyledBox } from '../../../../common/styledCommonComponents';
import { removeTreatmentMedication } from '../../../../redux/slices/formSlice';
import SelectorInputField from '../SelectorInputField';

const optionsMed = {
	Aspirina: 'Aspirina',
	Ribotril: 'Ribotril',
	Tafirol: 'Tafirol',
	Actron: 'Actron',
	Amoxixilina: 'Amoxixilina',
};
const optionsGram = {
	0: '0',
	1: '1',
	2: '2',
	3: '3',
	4: '4',
};

const MedicationField = ({ id, names, values, onChange, type }) => {
	// pegar directo al endpoint que trae la medicacion y el gramaje

	// crear funciones 1: onchange para gramaje, 2: onChange para medication
	// argumentos para onChange: names y values

	const handleChangeMed = () => {};

	const handleChangeGram = () => {};

	// onDelete, usa el dispatch(removeTreatmentMedication(id))
	const dispatch = useDispatch();

	const handleDelete = (id) => {
		dispatch(removeTreatmentMedication(id));
	};

	return (
		<StyledBox
			css={{
				width: '100%',
				columnGap: '30px',
				display: 'flex',
				boxSizing: 'border-box',
			}}
		>
			<StyledBox
				css={{
					flex: 0.6,
				}}
			>
				<SelectorInputField
					type={type}
					value={values.medication}
					label={'Medicamento'}
					name={names.medication}
					onChange={onChange} // onChange medicacion
					options={optionsMed} // recibe del endpoint
				/>
			</StyledBox>
			<StyledBox
				css={{
					flex: 0.4,
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'flex-end',
					columnGap: '20px',
				}}
			>
				<SelectorInputField
					type={type}
					value={values.grammage}
					label={'Gramaje'}
					name={names.grammage}
					onChange={onChange} // onChange gramaje
					options={optionsGram} // recibe del endpoint
				/>
				{id !== 1 && (
					<StyledBox>
						<IconButton
							icon={<TrashIcon />}
							onClick={() => handleDelete(id)}
						/>
					</StyledBox>
				)}
			</StyledBox>
		</StyledBox>
	);
};

export default MedicationField;
