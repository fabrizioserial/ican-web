import { StyledBox } from '../../../../../../common/styledCommonComponents';
import React, { useCallback, useEffect, useRef } from 'react';
import { FormBuilderWithoutHeader } from '../../../../../form/InputFields/utils';
import { useDispatch, useSelector } from 'react-redux';
import {
	cancelFinishTreatment,
	finishTreatment,
	setValue,
} from '../../../../../../redux/slices/treatmentSlice';
import Button from '../../../../../../common/components/button/Button';
import {
	useGetTreatmentByIdQuery,
	useLazyGetPatientDataQuery,
} from '../../../../../../redux/api/patientApi';
import { StyledCircularProgress } from '../../../../../CustomCircularProgress/styles';
import { TreatmentStatusType } from '../../../../../../utils/utils';
import { useEndTreatmentMutation } from '../../../../../../redux/api/treatmentApi';
import { useSetTreatmentFormMutation } from '../../../../../../redux/api/validateFormApi';

const TreatmentBody = ({ onClose }) => {
	const { reportId, patientId } = useSelector((state) => state.utilsSlice);
	const { fields, values, status } = useSelector(
		(state) => state.treatmentSlice,
	);
	const [
		finishTreatmentMutation,
		{ isLoading: endTreatmentLoading, isSuccess: isSuccessEnd },
	] = useEndTreatmentMutation();
	const dispatch = useDispatch();
	const timestampRef = useRef(Date.now()).current;
	const { isLoading } = useGetTreatmentByIdQuery(
		{ reportId: reportId, sessionTime: timestampRef },
		{
			skip: !reportId,
		},
	);
	const [
		createTreatment,
		{ data, isLoading: isLoadingCreation, isSuccess: isSuccessCreate },
	] = useSetTreatmentFormMutation();

	const [fetchPatient, { data: dataPatient, isLoading: isLoadingData }] =
		useLazyGetPatientDataQuery();

	const onChangeHandler = (name, value) => {
		dispatch(setValue({ name, value }));
	};

	const handleFinishTreatment = () => {
		const body = {
			endingMotive: values.endingMotive,
			otherMotive: values.otherMotive,
			progress: Boolean(values.progress),
			finishDate: new Date(Date.now())?.toISOString().split('T')[0],
		};

		finishTreatmentMutation({ body: body, treatmentId: reportId });
	};

	useEffect(() => {
		if (isSuccessCreate || isSuccessEnd) {
			onClose();
		}
	}, [isSuccessEnd, isSuccessCreate]);

	useEffect(() => {
		patientId && fetchPatient(patientId);
	}, [patientId]);

	const handleCreateTreatment = useCallback(() => {
		const medicationsToPush = values.medicationIds.map((id) => ({
			medicationId: values[`medication${id}`],
			grammageId: values[`grammage${id}`],
			intention: values.intention,
		}));

		const body = {
			medicalHistoryId: dataPatient?.medicalHistoryId,
			objective: values.objective,
			tumorTreatment: values.tumorTreatment,
			medications: medicationsToPush,
			startDate: values.startDate,
			estimateFinishDate: values.estimateFinishDate,
		};
		createTreatment(body);
	}, [dataPatient, values]);

	const Loading = () => {
		return (
			isLoading || endTreatmentLoading || isLoadingData || isLoadingCreation
		);
	};

	const ButtonsRender = () => {
		switch (status) {
			case TreatmentStatusType.WITHOUT_TREATMENT:
				return (
					<>
						<Button
							className="submit"
							text={'Crear Tratamiento'}
							disabled={false}
							onClick={() => handleCreateTreatment()}
						/>
					</>
				);
			case TreatmentStatusType.HAS_TREATMENT:
				return (
					<>
						<Button
							className="rejected"
							text={'Finalizar Tratamiento'}
							disabled={false}
							onClick={() => dispatch(finishTreatment())}
						/>
					</>
				);
			case TreatmentStatusType.FINISHING_TREATMENT:
				return (
					<>
						<Button
							className="submit"
							text={'Cancelar'}
							disabled={false}
							onClick={() => dispatch(cancelFinishTreatment())}
						/>
						<Button
							className="rejected"
							text={'Finalizar Tratamiento'}
							disabled={false}
							onClick={() => handleFinishTreatment()}
						/>
					</>
				);
			case TreatmentStatusType.IS_FINISHED:
		}
	};

	return (
		<StyledBox css={{ padding: '20px 0 40px 0', boxSizing: 'border-box' }}>
			{Loading() ? (
				<StyledBox
					css={{
						height: '300px',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<StyledCircularProgress />
				</StyledBox>
			) : (
				<>
					<StyledBox>
						{FormBuilderWithoutHeader(fields, values, onChangeHandler)}
					</StyledBox>
					<StyledBox
						css={{
							padding: '30px 45px 0',
							display: 'flex',
							flexDirection: 'row',
							columnGap: '20px',
						}}
					>
						{ButtonsRender()}
					</StyledBox>
				</>
			)}
		</StyledBox>
	);
};
export default TreatmentBody;
