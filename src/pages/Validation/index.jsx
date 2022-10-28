import React, { useEffect } from 'react';
import { StyledBox, StyledScreen } from '../../common/styledCommonComponents';
import { FormBuilder } from '../../components/form/InputFields/utils';
import Button from '../../common/components/button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setValue } from '../../redux/slices/formSlice';
import { useLazyGetPatientDataQuery } from '../../redux/api/patientApi';
import { useParams } from 'react-router';
import { useSetPatientFormMutation } from '../../redux/api/validateFormApi';

const Validation = () => {
	// const [sections, setSections] = useState(FormsSqueleton);
	const { patients, hospital, biomarkers, relapses, state, treatment, values } = useSelector(state => state.formSlice)
	const dispatch = useDispatch()
	const { patientId } = useParams()
	const [setPatientForm, { result: resultPostPatient, isSuccess: successPostPatient }] = useSetPatientFormMutation()
	// const [values, setValues] = useState(validationFormValues);
	const [
		refetch, { data, isSuccess }
	] = useLazyGetPatientDataQuery()

	useEffect(() => {
		refetch(patientId)
	}, [])
	useEffect(() => {
		console.log(resultPostPatient)
	}, [successPostPatient])

	// set values of validationFormValues
	const handleOnChange = (name, newValue) => {
		if (!name || newValue === undefined) return;
		dispatch(setValue({ name, value: newValue }))
	};

	const handleSubmit = (values) => {

		let biomarkers = []
		let medications = []

		// let medication = {
		// 	medicationId: values.medicationId,
		// 	intention: values.treatmentObjective,
		// 	grammageId: values.grammage
		// }
		for (let index = 1; index < 16; index++) {
			if (!values['biomarker'.concat(index)]) {
				index = 15
				let medicalHistory = {
					userId: patientId,
					tumor: values.tumor,
					nodule: values.nodule,
					metastasis: values.metastasis,
					risk: values.risk,
					biomarkers: biomarkers,
					cancerId: values.cancerId
				}
				console.log("medical", medicalHistory)

				for (let indexMed = 1; indexMed < 16; indexMed++) {
					if (!values['medication'.concat(index)]) {
						indexMed = 16

						let treatment = {
							medicalHistoryId: values.medicHistoryNumber,
							objective: values.treatmentObjective,
							tumorTreatment: values.tumor,
							treatmentLine: values.treatmentLine,
							medications: values.medications,
							startDate: values.treatmentStartDate,
							estimateFinishDate: values.estimateFinishDate
						}
						setPatientForm(medicalHistory)
						// setTreatmentForm(treatment)
					}
					// medications = [
					// 	// ...medications,
					// 	// [values['medication'.concat(index)], values['grammage'.concat(index)]],
					// ]
				}

			}
			biomarkers = [
				...biomarkers,
				values['biomarker'.concat(index)],
			]
		}
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
