import React, { useEffect } from 'react';
import { StyledBox, StyledScreen } from '../../common/styledCommonComponents';
import { FormBuilder } from '../../components/form/InputFields/utils';
import Button from '../../common/components/button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { cleanForm, setValue } from '../../redux/slices/formSlice';
import { useNavigate, useParams } from 'react-router';
import {
	useLazyGetCancerQuery,
	useSetBiomarkerMutation,
	useSetPatientFormMutation,
	useSetSetbacksMutation,
	useSetTreatmentFormMutation,
	useUpdateValidatePatientMutation,
} from '../../redux/api/validateFormApi';
import { useLazyGetPatientDataFormQuery } from '../../redux/api/patientApi';
import classNames from 'classnames';

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
	const navigation = useNavigate();
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

	const [postBiomarkers, result] = useSetBiomarkerMutation();

	// const [values, setValues] = useState(validationFormValues);
	const [refetch, { data, isSuccess, isLoading }] =
		useLazyGetPatientDataFormQuery();
	const [
		getCancersFetching,
		{ data: dataCancer, isSuccess: isSuccessCancer },
	] = useLazyGetCancerQuery();
	// const { data: dataCancerMed, isSuccess: isSuccessCancerMed } = useGetCancerMedicationQuery()
	useEffect(() => {
		refetch(patientId);
		getCancersFetching();
		return () => {
			dispatch(cleanForm());
		};
	}, []);

	useEffect(() => {
		if (successPostPatient && successPostTreatment) {
			updateValidatePatient({ userId: patientId, status: 'Accepted' }); // Pending
			navigation('/home');
		}
	}, [
		resultPostPatient,
		successPostPatient,
		resultPostTreatment,
		successPostTreatment,
	]);

	// set values of validationFormValues
	const handleOnChange = (name, newValue) => {
		if (!name || newValue === undefined) return;
		dispatch(setValue({ name, value: newValue }));
	};

	const handleRejected = () => {
		updateValidatePatient({ userId: patientId, status: 'Rejected' });
	};

	const handleUpdate = () => {
		let biomarkers = [];
		let setbacks = [];
		let treatment = [];
		let medications = [];

		// Has new biomarkers?
		if (values.biomarkers.biomarkersId.length > 0) {
			values.biomarkers.biomarkersId.forEach((id) => {
				biomarkers = [
					...biomarkers,
					{
						biomarkerId: values[`biomarker${id}`],
						evaluation: values[`evaluation${id}`],
						medicalHistoryId: values.medicalHistoryId,
					},
				];
			});
		}

		// Has new set backs?
		if (values.setbacks.setbacksId.length > 0) {
			values.setbacks.setbacksId?.forEach((setbackId) => {
				setbacks = [
					...setbacks,
					{
						setBackDate: new Date(
							values[`setBackDate${setbackId}`],
						).toISOString(),
						diagnosisDate: new Date(
							values[`diagnosisDate${setbackId}`],
						).toISOString(),
						setBackPlace: values[`setBackPlace${setbackId}`],
						patientId: patientId,
					},
				];
			});
		}
		if (
			values.treatment.medicationsIds.length > 0 &&
			values.treatmentStartDate &&
			values.estimateFinishDate
		) {
			values.treatment.medicationsIds.forEach((id) => {
				medications = [
					...medications,
					{
						medicationId: values[`medication${id}`],
						intention: values.intention,
						grammageId: values[`grammage${id}`],
					},
				];
			});
			treatment = {
				medicalHistoryId: values.medicalHistoryId,
				objective: values.treatmentObjective,
				tumorTreatment: values.tumorTreatment,
				// treatmentLine: values.treatmentLine ?? 1,
				medications: medications,
				startDate: values.treatmentStartDate,
				estimateFinishDate: values.estimateFinishDate,
			};
		}

		treatment.medications.length > 0 && setTreatmentForm(treatment); // listo

		setbacks && setbacks.map((item) => setSetbacks(item));
		biomarkers && biomarkers.map((biomarker) => postBiomarkers(biomarker));
	};

	const handleSubmit = (values) => {
		let biomarkers = [];
		let setbacks = [];
		let medicalHistory = {
			userId: patientId,
			tumor: values.tumor,
			nodule: values.nodule,
			metastasis: values.metastasis,
			risk: values.risk,
			cancerId: values.cancerSubType,
			expresionPDL1: values.expresionPDL1,
			cancerStage: values.cancerStage,
			diagnosisDate: values.diagnosisDate,
		};

		values.biomarkers.biomarkersId.forEach((id) => {
			biomarkers = [
				...biomarkers,
				{
					biomarkerId: values[`biomarker${id}`],
					evaluation: values[`evaluation${id}`],
				},
			];
		});

		medicalHistory = {
			...medicalHistory,
			biomarkers,
		};

		values.setbacks.setbacksId?.forEach((setbackId) => {
			setbacks = [
				...setbacks,
				{
					setBackDate: new Date(
						values[`setBackDate${setbackId}`],
					).toISOString(),
					diagnosisDate: new Date(
						values[`diagnosisDate${setbackId}`],
					).toISOString(),
					setBackPlace: values[`setBackPlace${setbackId}`],
					patientId: patientId,
				},
			];
		});

		setbacks.map((item) => setSetbacks(item));
		setPatientForm(medicalHistory);
	};

	useEffect(() => {
		refetch(patientId);
	}, [successPostPatient]);

	useEffect(() => {
		if (
			successPostPatient &&
			data.medicalHistoryId &&
			values.treatment?.medicationsIds?.length > 0
		) {
			let treatment = [];
			let medications = [];
			values.treatment.medicationsIds.forEach((id) => {
				medications = [
					...medications,
					{
						medicationId: values[`medication${id}`],
						intention: values.intention,
						grammageId: values[`grammage${id}`],
					},
				];
			});
			treatment = {
				medicalHistoryId: values.medicalHistoryId,
				objective: values.treatmentObjective,
				tumorTreatment: values.tumorTreatment,
				// treatmentLine: values.treatmentLine ?? 1,
				medications: medications,
				startDate: values.treatmentStartDate,
				estimateFinishDate: values.estimateFinishDate,
			};
			setTreatmentForm(treatment); // listo
		}
	}, [successPostPatient, data]);

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
				{values && !isLoading && (
					<>
						<StyledBox
							css={{
								backgroundColor: 'white',
								width: '800px',
								borderRadius: '20px',
								margin: '50px',
							}}
						>
							{FormBuilder(
								[patients, hospital, biomarkers, setbacks, treatment],
								values,
								handleOnChange,
							)}
						</StyledBox>
						<StyledBox
							css={{
								margin: '0 50px',
								display: 'flex',
								flexDirection: 'row',
								columnGap: '10px',
							}}
						>
							{values.status !== 'Accepted' && (
								<Button
									text={'Rechazar'}
									className="rejected"
									onClick={() => handleRejected()}
								/>
							)}
							<Button
								text={'Guardar cambios'}
								className={classNames('submit')}
								onClick={() =>
									values?.medicalHistoryId
										? handleUpdate()
										: handleSubmit(values)
								}
							/>
						</StyledBox>
					</>
				)}
			</StyledBox>
		</StyledScreen>
	);
};
export default Validation;
