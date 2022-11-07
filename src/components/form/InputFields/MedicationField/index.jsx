import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import TrashIcon from '../../../../assets/TrashIcon';
import IconButton from '../../../../common/components/iconButton';
import { StyledBox } from '../../../../common/styledCommonComponents';
import { useGetCancerMedicationQuery } from '../../../../redux/api/validateFormApi';
import { removeTreatmentMedication } from '../../../../redux/slices/formSlice';
import SelectorInputField from '../SelectorInputField';
import { useLazyGetPatientDataFormQuery } from '../../../../redux/api/patientApi';
import { useTheme } from 'styled-components';

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

const MedicationField = ({ id, names, values, onChange, type, disabled }) => {
	// pegar directo al endpoint que trae la medicacion y el gramaje

	// crear funciones 1: onchange para gramaje, 2: onChange para medication
	// argumentos para onChange: names y values

	const theme = useTheme();

	const { data: dataCancerMed, isSuccess: isSuccessCancerMed } =
		useGetCancerMedicationQuery();

	const [optionsMed, setOptionsMed] = useState([]);
	const [optionsGram, setOptionsGram] = useState([]);

	const [_, { data }] = useLazyGetPatientDataFormQuery();

	useEffect(() => {
		if (isSuccessCancerMed) {
			let auxOptMed = [];
			let auxOptGram = {};
			auxOptMed.no_value = 'Selecciona un Medicamento';
			Object.values(dataCancerMed).forEach((med) => {
				auxOptMed[med.id] = med.name;
				auxOptGram[med.id] = {
					no_value: 'Selecciona Gramaje',
				};
			});
			Object.values(dataCancerMed).forEach((med) =>
				med.possibleGrammages.forEach((gram) => {
					auxOptGram = {
						...auxOptGram,
						[med.id]: {
							...auxOptGram[med.id],
							[gram.grammage
								.id]: `${gram.grammage.grammage} ${gram.grammage.unit}`,
						},
					};
				}),
			);

			setOptionsMed(auxOptMed);
			setOptionsGram(auxOptGram);
		}
	}, [dataCancerMed, isSuccessCancerMed, data]);

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
					disabled={disabled}
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
					options={optionsGram[values?.medication] ?? []} // recibe del endpoint
					disabled={disabled}
				/>
				{id !== 1 && (
					<StyledBox
						css={{
							backgroundColor: disabled ? theme.oncoGrey : 'transparent',
							pointerEvents: disabled ? 'none' : 'auto',
							cursor: 'not-allowed',
						}}
					>
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
