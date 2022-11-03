import React, { useEffect } from 'react';
import { StyledBox, StyledScreen } from '../../common/styledCommonComponents';
import { FormBuilder } from '../../components/form/InputFields/utils';
import Button from '../../common/components/button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setValue } from '../../redux/slices/formSlice';
import { useParams } from 'react-router';
import {
	useGetCancerQuery,
	useLazyGetCancerSubTypeQuery,
	useLazyGetCancerTypeQuery,
	useSetPatientFormMutation,
	useSetSetbacksMutation,
	useSetTreatmentFormMutation,
	useUpdateValidatePatientMutation,
} from '../../redux/api/validateFormApi';
import { useLazyGetPatientDataFormQuery } from '../../redux/api/patientApi';

const Validation = () => {
	// const [sections, setSections] = useState(FormsSqueleton);
	const {
		patients,
		hospital,
		biomarkers,
		setbacks,
		state,
		treatment,
		values,
	} = useSelector((state) => state.formSlice);
	const dispatch = useDispatch();
	const { patientId } = useParams();
	const [
		setPatientForm,
		{ result: resultPostPatient, isSuccess: successPostPatient },
	] = useSetPatientFormMutation();
	const [
		setSetbacks,
		{ result: resultPostSetBacks, isSuccess: successPostSetBacks },
	] = useSetSetbacksMutation();
	const [
		setTreatmentForm,
		{ result: resultPostTreatment, isSuccess: successPostTreatment },
	] = useSetTreatmentFormMutation();
	const [
		updateValidatePatient,
		{ result: resultUpdateValidation, isSuccess: succesUpdateValidation },
	] = useUpdateValidatePatientMutation();

	// const [values, setValues] = useState(validationFormValues);
	const [refetch, { data, isSuccess }] = useLazyGetPatientDataFormQuery();

	const { data: dataCancer, isSuccess: isSuccessCancer } = useGetCancerQuery();
	const [
		refetchCancerType,
		{ data: dataCancerType, isSuccess: isSuccessCancerType },
	] = useLazyGetCancerTypeQuery();
	const [
		refetchCancerSubType,
		{ data: dataCancerSubType, isSuccess: isSuccessCancerSubType },
	] = useLazyGetCancerSubTypeQuery();
	// const { data: dataCancerMed, isSuccess: isSuccessCancerMed } = useGetCancerMedicationQuery()

	useEffect(() => {
		refetch(patientId);
	}, []);

	console.log(values);

	useEffect(() => {
		// console.log("update status")
		(successPostPatient && successPostTreatment) === true &&
			updateValidatePatient({ userId: patientId, status: 'Accepted' }); // Pending
	}, [
		resultPostPatient,
		successPostPatient,
		resultPostTreatment,
		successPostTreatment,
	]);

	useEffect(() => {
		succesUpdateValidation && console.log('update', resultUpdateValidation);
	}, [succesUpdateValidation, resultUpdateValidation]);

	useEffect(() => {
		successPostSetBacks && console.log('setBack', resultPostSetBacks);
	}, [successPostSetBacks, resultPostSetBacks]);

	// set values of validationFormValues
	const handleOnChange = (name, newValue) => {
		if (!name || newValue === undefined) return;
		dispatch(setValue({ name, value: newValue }));
	};

	const handleSubmit = (values) => {
		let biomarkers = [];
		let setbacks = [];
		let medications = [];
		let treatment = [];
		let medicalHistory = {};

		refetchCancerType(
			dataCancer.find((item) => item.organ === values.organ).id,
		);

		let cancerType = dataCancerType;
		refetchCancerSubType('7edc14a0-9acb-4bbf-952d-bafd35edd513');
		let cancerSubType = dataCancerSubType;

		console.log('cancer type', cancerType);
		console.log('cancer sub type', cancerSubType);

		for (let indexBio = 1; indexBio < 16; indexBio++) {
			if (!values['biomarker'.concat(indexBio)]) {
				medicalHistory = {
					userId: patientId,
					tumor: values.tumor,
					nodule: values.nodule,
					metastasis: values.metastasis,
					risk: values.risk,
					biomarkers: biomarkers,
					cancerId: '7edc14a0-9acb-4bbf-952d-bafd35edd573',
				};
				break;
			}
			biomarkers = [
				...biomarkers,
				{
					biomarkerId: values['biomarker'.concat(indexBio)],
					evaluation: JSON.parse(values['evaluation'.concat(indexBio)]),
				},
			];
		}

		for (let indexSetBacks = 1; indexSetBacks < 16; indexSetBacks++) {
			if (
				!values['setBackDate'.concat(indexSetBacks)] &&
				!values['diagnosisDate'.concat(indexSetBacks)] &&
				!values['setBackPlace'.concat(indexSetBacks)]
			) {
				break;
			}
			setbacks = [
				...setbacks,
				{
					setBackDate: new Date(
						values['setBackDate'.concat(indexSetBacks)],
					).toISOString(),
					diagnosisDate: new Date(
						values['diagnosisDate'.concat(indexSetBacks)],
					).toISOString(),
					setBackPlace: values['setBackPlace'.concat(indexSetBacks)],
					patientId: patientId,
				},
			];
		}

		for (let indexTreat = 1; indexTreat < 16; indexTreat++) {
			if (
				!values['medication'.concat(indexTreat)] &&
				!values['grammage'.concat(indexTreat)]
			) {
				treatment = {
					medicalHistoryId: values.medicalHistoryId,
					objective: values.treatmentObjective,
					tumorTreatment: values.tumorTreatment,
					treatmentLine: values.treatmentLine ?? 1,
					medications: medications,
					startDate: values.treatmentStartDate,
					estimateFinishDate: values.estimateFinishDate,
				};
				break;
			}
			medications = [
				...medications,
				{
					medicationId: values['medication'.concat(indexTreat)],
					intention: values.intention,
					grammageId: values['grammage'.concat(indexTreat)],
				},
			];
		}

		// console.log(values)
		// console.log(treatment)
		setbacks.map((item) => setSetbacks(item));
		setTreatmentForm(treatment); // listo
		setPatientForm(medicalHistory);
	};

	console.log(hospital);

	return (
		<StyledScreen css={{ justifyContent: 'center', flexDirection: 'column' }}>
			<StyledBox
				css={{
					margin: '50px 0',
					display: 'flex',
					justifyContent: 'center',
					alignSelf: 'center',
					flexDirection: 'column',
				}}
			>
				<StyledBox
					css={{
						backgroundColor: 'white',
						width: '800px',
						borderRadius: '20px',
						margin: '50px',
					}}
				>
					{values &&
						FormBuilder(
							[
								patients,
								hospital,
								biomarkers,
								setbacks,
								state,
								treatment,
							],
							values,
							handleOnChange,
						)}
				</StyledBox>
				<StyledBox
					css={{
						margin: '0 50px',
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
