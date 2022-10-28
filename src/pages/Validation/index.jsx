import React, { useEffect } from 'react';
import { StyledBox, StyledScreen } from '../../common/styledCommonComponents';
import { FormBuilder } from '../../components/form/InputFields/utils';
import Button from '../../common/components/button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setValue } from '../../redux/slices/formSlice';
import { useParams } from 'react-router';
import { useSetPatientFormMutation, useSetTreatmentFormMutation, useUpdateValidatePatientMutation } from '../../redux/api/validateFormApi';
import { useLazyGetPatientDataFormQuery } from '../../redux/api/patientApi';

const Validation = () => {
	// const [sections, setSections] = useState(FormsSqueleton);
	const { patients, hospital, biomarkers, relapses, state, treatment, values } = useSelector(state => state.formSlice);
	const dispatch = useDispatch();
	const { patientId } = useParams();
	const [setPatientForm, { result: resultPostPatient, isSuccess: successPostPatient }] = useSetPatientFormMutation();
	const [setTreatmentForm, { result: resultPostTreatment, isSuccess: successPostTreatment }] = useSetTreatmentFormMutation();
	const [updateValidatePatient, { result: resultUpdateValidation, isSuccess: succesUpdateValidation }] = useUpdateValidatePatientMutation();

	// const [values, setValues] = useState(validationFormValues);
	const [
		refetch, { data, isSuccess }
	] = useLazyGetPatientDataFormQuery()

	useEffect(() => {
		refetch(patientId)
	}, [])
	useEffect(() => {
		(successPostPatient && successPostTreatment) === true &&
			updateValidatePatient({ userId: patientId, status: "Accepted" })
	}, [resultPostPatient, successPostPatient, resultPostTreatment, successPostTreatment])

	useEffect(() => {
		succesUpdateValidation && console.log("update", resultUpdateValidation)
	}, [succesUpdateValidation, resultUpdateValidation])

	// set values of validationFormValues
	const handleOnChange = (name, newValue) => {
		if (!name || newValue === undefined) return;
		dispatch(setValue({ name, value: newValue }))
	};

	const handleSubmit = (values) => {
		let biomarkers = []

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
					cancerId: values.cancerId ?? "5e368c9c-ad26-480f-8309-5a45ac9e0093"
				}
				let medications = [
					{
						medicationId: "d426e95a-dcd1-4747-8df0-facf2c0bbabf",
						grammageId: "4a79d71a-a534-489c-9547-2784a64cfc8b",
						intention: "Adjuvant"
					},
					{
						medicationId: "1c78d303-2211-4abc-9545-30e3a313018f",
						grammageId: "e42341aa-eacd-4a24-954e-7fb213f93b87",
						intention: "Adjuvant"
					}
				]

				let treatment = {
					// medicalHistoryId: values.medicHistoryNumber,
					medicalHistoryId: "46f50029-2f68-470b-9dda-d96da0b03dcb",
					objective: "",
					tumorTreatment: "Surgery",
					treatmentLine: 1,
					startDate: "2022-11-27 00:00:00.000",
					estimateFinishDate: "2022-10-27 00:00:00.000",
					medications: medications
				}
				console.log("treatment", treatment)
				setPatientForm(medicalHistory)
				setTreatmentForm(treatment)

				// for (let indexMed = 1; indexMed < 16; indexMed++) {
				// 	if (!values['medication'.concat(index)]) {
				// 		indexMed = 16

				// 		let treatment = {
				// 			// medicalHistoryId: values.medicHistoryNumber,
				// 			medicalHistoryId: "46f50029-2f68-470b-9dda-d96da0b03dcb",
				// 			objective: values.treatmentObjective ?? '',
				// 			tumorTreatment: values.tumor,
				// 			treatmentLine: values.treatmentLine,
				// 			medications: medications,
				// 			startDate: values.treatmentStartDate,
				// 			estimateFinishDate: values.estimateFinishDate
				// 		}
				// 		console.log("treatment", treatment)
				// 		// setPatientForm(medicalHistory)
				// 		setTreatmentForm(treatment)
				// 	}
				// 	// medications = [
				// 	// 	// ...medications,
				// 	// 	// [values['medication'.concat(index)], values['grammage'.concat(index)]],
				// 	// ]
				// }

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
