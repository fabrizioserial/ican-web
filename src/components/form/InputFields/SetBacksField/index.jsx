import React from 'react';
import { useDispatch } from 'react-redux';
import TrashIcon from '../../../../assets/TrashIcon';
import IconButton from '../../../../common/components/iconButton';
import { StyledBox } from '../../../../common/styledCommonComponents';
import { removeSetBacks } from '../../../../redux/slices/formSlice';
import DateInputField from '../DateInputField';
import SelectorInputField from '../SelectorInputField';

const options = {
	Local: "Local",
	Distancia: "Distacia",
	DistanciaYLocal: "DistanciaYLocal"
}

const SetBacksField = ({ id, names, placeholder, values, onChange, type }) => {
	// pegar directo al endpoint que trae la medicacion y el gramaje

	// crear funciones 1: onchange para gramaje, 2: onChange para medication
	// argumentos para onChange: names y values

	const handleChangeMed = () => { };

	const handleChangeGram = () => { };

	// onDelete, usa el dispatch(removeTreatmentMedication(id))
	const dispatch = useDispatch();

	const handleDelete = id => {
		dispatch(removeSetBacks(id))
	}

	return (
		<StyledBox
			css={{
				flexDirection: "row",
				rowGap: "30px",
				width: "100%"
			}}
		>
			<StyledBox
				css={{
					width: "100%",
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
						flexDirection: "row",
						alignItems: 'flex-end',
						columnGap: '20px'
					}}
				>
					<DateInputField
						type={type}
						placeholder={placeholder}
						value={values.setBackDate}
						label={"Fecha de Recaida"}
						name={names.setBackDate}
						onChange={onChange}
					/>
				</StyledBox>
				<StyledBox
					css={{
						flex: 0.5,
						display: 'flex',
						flexDirection: "row",
						alignItems: 'flex-end',
						columnGap: '20px'
					}}
				>
					<DateInputField
						type={type}
						placeholder={placeholder}
						value={values.diagnosisDate}
						label={"Fecha del Diagnostico de la Enferemedad Metatistica"}
						name={names.diagnosisDate}
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
					width: "100%",
					marginBottom: '30px',
					display: 'flex',
					boxSizing: 'border-box',
				}}
			>
				<StyledBox
					css={{
						flex: 0.5,
						display: 'flex',
						flexDirection: "row",
						alignItems: 'flex-end',
						paddingRight: 30
					}}
				>

					<SelectorInputField
						type={type}
						value={values.setBackPlace}
						label={"Sitio de la Metástasis"}
						name={names.setBackPlace}
						onChange={onChange} // onChange medicacion
						options={options} // recibe del endpoint
					/>
				</StyledBox>
			</StyledBox>

		</StyledBox>
	)
}

export default SetBacksField