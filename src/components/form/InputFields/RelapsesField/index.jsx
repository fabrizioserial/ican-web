import React from 'react';
import { useDispatch } from 'react-redux';
import TrashIcon from '../../../../assets/TrashIcon';
import IconButton from '../../../../common/components/iconButton';
import { StyledBox } from '../../../../common/styledCommonComponents';
import { removeRelapses } from '../../../../redux/slices/formSlice';
import DateInputField from '../DateInputField';
import TextInputField from '../TextInputField';

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

const RelapsesField = ({ id, names, placeholder, values, onChange, type }) => {
	// pegar directo al endpoint que trae la medicacion y el gramaje

	// crear funciones 1: onchange para gramaje, 2: onChange para medication
	// argumentos para onChange: names y values

	const handleChangeMed = () => {};

	const handleChangeGram = () => {};

	// onDelete, usa el dispatch(removeTreatmentMedication(id))
	const dispatch = useDispatch();

	const handleDelete = (id) => {
		dispatch(removeRelapses(id));
	};

	return (
		<StyledBox
			css={{
				flexDirection: 'row',
				rowGap: '30px',
				width: '100%',
			}}
		>
			<StyledBox
				css={{
					width: '100%',
					columnGap: '30px',
					marginBottom: '30px',
					display: 'flex',
					boxSizing: 'border-box',
				}}
			>
				<StyledBox
					css={{
						flex: 0.5,
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'flex-end',
						columnGap: '20px',
					}}
				>
					<DateInputField
						type={type}
						placeholder={placeholder}
						value={values.relapseDate}
						label={'Fecha de Recaida'}
						name={names.relapseDate}
						onChange={onChange}
					/>
				</StyledBox>
				<StyledBox
					css={{
						flex: 0.5,
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'flex-end',
						columnGap: '20px',
					}}
				>
					<DateInputField
						type={type}
						placeholder={placeholder}
						value={values.diagnosticDate}
						label={'Fecha del Diagnostico de la Enferemedad Metatistica'}
						name={names.diagnosticDate}
						onChange={onChange}
					/>
					<StyledBox>
						<IconButton
							icon={<TrashIcon />}
							onClick={() => handleDelete(id)}
						/>
					</StyledBox>
				</StyledBox>
			</StyledBox>
			<StyledBox
				css={{
					width: '100%',
					marginBottom: '30px',
					display: 'flex',
					boxSizing: 'border-box',
				}}
			>
				<StyledBox
					css={{
						flex: 0.5,
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'flex-end',
						paddingRight: 30,
					}}
				>
					<TextInputField
						type={type}
						placeholder={placeholder}
						value={values.metastasisSite}
						label={'Sitio de la Metástasis'}
						name={values.metastasisSite}
						onChange={onChange}
					/>
				</StyledBox>
			</StyledBox>
		</StyledBox>
	);
};

export default RelapsesField;
