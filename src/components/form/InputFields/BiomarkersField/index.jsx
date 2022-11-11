import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import TrashIcon from '../../../../assets/TrashIcon';
import IconButton from '../../../../common/components/iconButton';
import { StyledBox } from '../../../../common/styledCommonComponents';
import {
	useGetBiomarkersQuery,
	useGetCancerQuery,
} from '../../../../redux/api/validateFormApi';
import { removeBiomarker } from '../../../../redux/slices/formSlice';
import SelectorInputField from '../SelectorInputField';
import { useTheme } from 'styled-components';
import { useLazyGetPatientDataFormQuery } from '../../../../redux/api/patientApi';
import TextInputField from '../TextInputField';

const optionsEvaluation = {
	Mutated: {
		unknown: 'Desconocido',
		mutated: 'Mutado',
		normal: 'Normal',
	},
	Amplified: {
		unknown: 'Desconocido',
		amplified: 'Amplificado',
		mutated: 'Mutado',
		normal: 'Normal',
	},
	Fusion: {
		unknown: 'Desconocido',
		fusion: 'Fusion',
		normal: 'Normal',
	},
	Boolean: {
		unknown: 'Desconocido',
		true: 'Positivo',
		false: 'Negativo',
	},
	Stable: {
		unknown: 'Desconocido',
		stable: 'Estable',
		unstable: 'Inestable',
		normal: 'Normal',
	},
};

const BiomarkerField = ({ id, names, values, onChange, type, disabled }) => {
	// pegar directo al endpoint que trae el biomarcardor y la evaluacion

	// crear funciones 1: onchange para evaluacion
	// argumentos para onChange: names y values

	const [optionsBio, setOptionsbio] = useState({});

	const { data: dataBiomarkers, isSuccess: isSuccessBio } =
		useGetBiomarkersQuery();
	const theme = useTheme();

	const { data: cancerList } = useGetCancerQuery();

	const handleChangeEvaluation = () => {};

	const dispatch = useDispatch();

	const handleDelete = (id) => {
		dispatch(removeBiomarker(id));
	};

	const [_, { data }] = useLazyGetPatientDataFormQuery();

	useEffect(() => {
		if (isSuccessBio && cancerList && values.organ) {
			let auxBio = {};
			Object.values(dataBiomarkers).forEach((bio) => {
				if (
					bio.cancerBiomarkers.find(
						(organWithCancer) =>
							organWithCancer.cancerOrgan ===
							cancerList.find((item) => item.id === values.organ).organ,
					)
				) {
					auxBio = {
						...auxBio,
						[bio.id]: {
							value: bio.id,
							label: bio.type,
							answerType: bio.answerType,
						},
					};
				}
			});

			auxBio = {
				...auxBio,
				0: 'Seleccione Biomarcador',
			};
			setOptionsbio(auxBio);
		}
	}, [dataBiomarkers, isSuccessBio, values.organ, cancerList]);

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
				{values.biomarker &&
					([
						'Mutated',
						'Amplified',
						'Fusion',
						'Stable',
						'Boolean',
					].includes(
						optionsBio[
							Object.keys(optionsBio)?.find(
								(option) => option === values.biomarker,
							)
						]?.answerType,
					) ? (
						<SelectorInputField
							type={type}
							value={values.evaluation}
							label={'Evaluación'}
							name={names.evaluation}
							onChange={onChange} // onChange gramaje
							options={
								optionsEvaluation[
									optionsBio[
										Object.keys(optionsBio)?.find(
											(option) => option === values.biomarker,
										)
									]?.answerType
								]
							} // recibe del endpoint
							disabled={disabled}
						/>
					) : (
						<TextInputField
							disabled={disabled}
							type={'number'}
							placeholder={'Escriba porcentaje'}
							value={values.evaluation}
							label={'Evaluación'}
							name={names.evaluation}
							onChange={onChange}
						/>
					))}

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
