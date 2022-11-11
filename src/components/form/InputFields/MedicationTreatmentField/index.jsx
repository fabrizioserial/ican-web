import { StyledBox } from '../../../../common/styledCommonComponents';
import SelectorInputField from '../SelectorInputField';
import IconButton from '../../../../common/components/iconButton';
import TrashIcon from '../../../../assets/TrashIcon';
import React, { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import { useGetCancerMedicationQuery } from '../../../../redux/api/validateFormApi';
import { useDispatch } from 'react-redux';
import { removeTreatmentMedication } from '../../../../redux/slices/formSlice';

const MedicationTreatmentField = ({
	id,
	names,
	values,
	onChange,
	type,
	disabled,
}) => {
	const theme = useTheme();
	const dispatch = useDispatch();
	const { data: dataCancerMed, isSuccess: isSuccessCancerMed } =
		useGetCancerMedicationQuery();

	const [optionsMed, setOptionsMed] = useState([]);
	const [optionsGram, setOptionsGram] = useState([]);

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
	}, [dataCancerMed, isSuccessCancerMed]);

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
				{id !== 1 && !disabled && (
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
export default MedicationTreatmentField;
