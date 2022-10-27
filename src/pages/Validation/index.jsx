import React, { useEffect } from 'react';
import { StyledBox, StyledScreen } from '../../common/styledCommonComponents';
import { FormBuilder } from '../../components/form/InputFields/utils';
import Button from '../../common/components/button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setValue } from '../../redux/slices/formSlice';
import { useLazyGetPatientDataQuery } from '../../redux/api/patientApi';
import { useParams } from 'react-router';

const Validation = () => {
	// const [sections, setSections] = useState(FormsSqueleton);
	const { patients, hospital, biomarkers, relapses, state, treatment, values } = useSelector(state => state.formSlice)
	const dispatch = useDispatch()
	const { patientId } = useParams()
	// const [values, setValues] = useState(validationFormValues);
	const [
		refetch, { data, isSuccess }
	] = useLazyGetPatientDataQuery()

	useEffect(() => {
		refetch(patientId)
	}, [])

	// set values of validationFormValues
	const handleOnChange = (name, newValue) => {
		if (!name || newValue === undefined) return;
		dispatch(setValue({ name, value: newValue }))
	};

	const handleSubmit = (values) => {
		console.log(values)

		// let biomarkers = []

		// setPatientForm({
		// 	userId: patientId,
		// 	tumor: values.tumor,
		// 	nodule: values.nodule,
		// 	metastasis: values.metastasis,
		// 	risk: values.risk,
		// 	biomarkers: biomarkers,
		// 	cancerId: values.cancerId
		// })
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
					{values && FormBuilder([patients, hospital, biomarkers, relapses, state, treatment], values, handleOnChange)}
				</StyledBox>
				<StyledBox
					css={{
						margin: "0 50px",
					}}
				>
					<Button
						text={'Guardar cambios'}
						className="submit"
						onClick={() => handleSubmit(values)}
					/>
				</StyledBox>
			</StyledBox>
		</StyledScreen>
	);
};
export default Validation;
