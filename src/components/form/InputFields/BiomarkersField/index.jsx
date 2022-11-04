import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import TrashIcon from '../../../../assets/TrashIcon';
import IconButton from '../../../../common/components/iconButton';
import { StyledBox } from '../../../../common/styledCommonComponents';
import { useGetBiomarkersQuery } from '../../../../redux/api/validateFormApi';
import { removeBiomarker } from '../../../../redux/slices/formSlice';
import SelectorInputField from '../SelectorInputField';
import { useTheme } from 'styled-components';
import { useLazyGetPatientDataFormQuery } from '../../../../redux/api/patientApi';

const optionsEvaluation = {
	true: 'Positiva',
	false: 'Negativa',
};

const BiomarkerField = ({ id, names, values, onChange, type, disabled }) => {
	// pegar directo al endpoint que trae el biomarcardor y la evaluacion

	// crear funciones 1: onchange para evaluacion
	// argumentos para onChange: names y values

	const [optionsBio, setOptionsbio] = useState({});

	const { data: dataBiomarkers, isSuccess: isSuccessBio } =
		useGetBiomarkersQuery();
	const theme = useTheme();

	const handleChangeEvaluation = () => {};

	const dispatch = useDispatch();

	const handleDelete = (id) => {
		dispatch(removeBiomarker(id));
	};

	const [_, { data }] = useLazyGetPatientDataFormQuery();

	useEffect(() => {
		if (isSuccessBio) {
			let auxBio = [];
			Object.values(dataBiomarkers).map(
				(bio) => (auxBio[bio.id] = bio.type),
			);

			auxBio[0] = 'Seleccione Biomarcador';
			setOptionsbio(auxBio);
		}
	}, [dataBiomarkers, isSuccessBio]);

	useEffect(() => {
		if (data) {
			let aux = [];
			data.biomarkers.forEach((a) => (aux[a.id] = a.type));
			aux[0] = 'Seleccione Biomarcador';
			setOptionsbio(aux);
		}
	}, [data]);

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
					value={values.biomarker}
					label={'Biomarcador'}
					name={names.biomarker}
					onChange={onChange} // onChange gramaje
					options={optionsBio} // recibe del endpoint
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
					value={values.evaluation}
					label={'Evaluación'}
					name={names.evaluation}
					onChange={onChange} // onChange gramaje
					options={optionsEvaluation} // recibe del endpoint
					disabled={disabled}
				/>
				{!disabled && (
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

export default BiomarkerField;
