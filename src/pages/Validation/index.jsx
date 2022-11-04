import React, { useEffect } from 'react';
import { StyledBox, StyledScreen } from '../../common/styledCommonComponents';
import { FormBuilder } from '../../components/form/InputFields/utils';
import Button from '../../common/components/button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { cleanForm, setValue } from '../../redux/slices/formSlice';
import { useNavigate, useParams } from 'react-router';
import {
	useLazyGetCancerQuery,
	useLazyGetCancerSubTypeQuery,
	useLazyGetCancerTypeQuery,
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

	// const [values, setValues] = useState(validationFormValues);
	const [refetch, { data, isSuccess, isLoading }] =
		useLazyGetPatientDataFormQuery();
	const [
		getCancersFetching,
		{ data: dataCancer, isSuccess: isSuccessCancer },
	] = useLazyGetCancerQuery();
	// const { data: dataCancerMed, isSuccess: isSuccessCancerMed } = useGetCancerMedicationQuery()
	console.log(values);
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

	const handleSubmit = (values) => {
		let biomarkers = [];
		let setbacks = [];
		let medicalHistory = {};

		for (let indexBio = 1; indexBio < 16; indexBio++) {
			if (!values['biomarker'.concat(indexBio)]) {
				medicalHistory = {
					userId: patientId,
					tumor: values.tumor,
					nodule: values.nodule,
					metastasis: values.metastasis,
					risk: values.risk,
					biomarkers: biomarkers,
					cancerId: values.cancerSubType,
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
		setbacks.map((item) => setSetbacks(item));
		setPatientForm(medicalHistory);
	};

	useEffect(() => {
		refetch(patientId);
	}, [successPostPatient]);

	useEffect(() => {
		if (successPostPatient && data.medicalHistoryId) {
			let treatment = [];
			let medications = [];
			for (let indexTreat = 1; indexTreat < 16; indexTreat++) {
				if (
					!values['medication'.concat(indexTreat)] &&
					!values['grammage'.concat(indexTreat)]
				) {
					treatment = {
						medicalHistoryId: values.medicalHistoryId,
						objective: values.treatmentObjective,
						tumorTreatment: values.tumorTreatment,
						// treatmentLine: values.treatmentLine ?? 1,
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
				<StyledBox
					css={{
						backgroundColor: 'white',
						width: '800px',
						borderRadius: '20px',
						margin: '50px',
					}}
				>
					{values &&
						!isLoading &&
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
						className={classNames('submit', {
							disabled: values.status === 'Accepted',
						})}
						onClick={() => handleSubmit(values)}
					/>
				</StyledBox>
			</StyledBox>
		</StyledScreen>
	);
};
export default Validation;
