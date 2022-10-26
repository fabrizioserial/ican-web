import React, { useEffect, useState } from 'react';
import { StyledBox, StyledScreen } from '../../common/styledCommonComponents';
import { FormsSqueleton, validationFormValues } from '../../utils/utils';
import { FormBuilder } from '../../components/form/InputFields/utils';
import Button from '../../common/components/button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setValue } from '../../redux/slices/formSlice';
import { useLazyPatientDataFormQuery } from '../../redux/api/patientApi';

const Validation = () => {
	// const [sections, setSections] = useState(FormsSqueleton);
	const { patients, hospital, biomarkers, relapses, state, treatment, values } = useSelector(state => state.formSlice)
	const dispatch = useDispatch()
	// const [values, setValues] = useState(validationFormValues);
	// const {
	// 	data: patientFormData,
	// 	refetch: getPatientData,
	// 	isSuccess,
	// } = useLazyPatientDataFormQuery();
	// useEffect(() => {
	// 	getPatientData()
	// }, [])

	// useEffect(() => {
	// 	let aux = ['name', 'surname', 'email', 'sex', 'medicHistoryNumber', 'registerDate']
	// 	console.log(patientFormData)

	// }, [isSuccess])
	useEffect(() => {
		let aux = [
			{
				name: "name",
				value: "patientFormData.name"
			},
			{
				name: "surname",
				value: "patientFormData.surname"
			},
			{
				name: "email",
				value: "patientFormData.email"
			},
			{
				name: "sex",
				value: "Femenine"
			},
			{
				name: "medicHistoryNumber",
				value: " patientFormData.medicHistoryNumber"
			},
			{
				name: "registerDate",
				value: "patientFormData.registerDate"
			},
		]

		aux.map(item =>
			dispatch(setValue({ name: item.name, value: item.value }))
		)
	}, [])

	// set values of validationFormValues
	const handleOnChange = (name, newValue) => {
		if (!name || newValue === undefined) return;
		dispatch(setValue({ name, value: newValue }))
	};


	return (
		<StyledScreen css={{ justifyContent: 'center', flexDirection: "column" }}>
			<StyledBox
				css={{
					margin: "50px 0",
					display: 'flex',
					justifyContent: "center",
					alignSelf: 'center',
					flexDirection: 'column',
				}}
			>
				<StyledBox
					css={{
						backgroundColor: 'white',
						width: "800px",
						borderRadius: '20px',
						margin: '50px',
					}}
				>
					{FormBuilder([patients, hospital, biomarkers, relapses, state, treatment], values, handleOnChange)}
				</StyledBox>
				<StyledBox
					css={{
						margin: "0 50px",
					}}
				>
					<Button
						text={'Guardar cambios'}
						className="submit"
					/>
				</StyledBox>
			</StyledBox>
		</StyledScreen>
	);
};
export default Validation;
