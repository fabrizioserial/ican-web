import React, { useEffect, useState } from 'react';
import { StyledBox, StyledP } from '../../../../common/styledCommonComponents';

import { useTheme } from 'styled-components';
import Card from '../../../../components/Card';
import PillIcon from '../../../../assets/PillIcon';
import PlusCircleIcon from '../../../../assets/PlusCircleIcon';
import TreatmentItem from './TreatmentItem';
import { useParams } from 'react-router';
import { useGetPatientTreatmetsQuery } from '../../../../redux/api/patientApi';
import _ from 'lodash';
import { StyledTreatmentItemContainer } from './TreatmentItemContainer';
import { StyledCircularProgress } from '../../../../components/CustomCircularProgress/styles';
import { useDispatch } from 'react-redux';
import { ModalTypeEnum } from '../../../../utils/utils';
import { setModalOpen } from '../../../../redux/slices/utilsSlice';
import { switchToEdit } from '../../../../redux/slices/treatmentSlice';

const TreatmentSection = () => {
	const theme = useTheme();
	const { patientId } = useParams();
	const dispatch = useDispatch();
	const {
		data: treatmentsData,
		isSuccess: isSuccessTreatmentsData,
		isLoading: isLoadingTreatment,
	} = useGetPatientTreatmetsQuery(patientId, { skip: !patientId });
	const [treatmentsResults, setTreatmentsResults] = useState([]);

	useEffect(() => {
		if (treatmentsData) {
			let finalArray = [];
			const finalizedTreatments = treatmentsData.filter((treatment) => {
				return treatment.finishDate !== null;
			});
			const currentTreatment = treatmentsData.filter((treatment) => {
				return treatment.finishDate === null;
			});

			finalArray = finalArray.concat(
				finalizedTreatments.map((item) => ({
					...item,
					status: 'finalized',
				})),
				currentTreatment
					.map((item) => ({ ...item, status: 'current' }))
					.filter((item) => item.id),
			);
			finalArray = _.orderBy(finalArray, 'date', 'desc');
			setTreatmentsResults(finalArray);
		}
	}, [isSuccessTreatmentsData, treatmentsData]);

	const parseDate = (DayItem) => {
		let dayObject = new Date(DayItem);
		let day =
			dayObject.getDate().toString() +
			'/' +
			(dayObject.getMonth() + 1) +
			'/' +
			dayObject.getFullYear();

		return day;
	};

	const parseMedicationList = (medications) => {
		const medicationArray = medications.split(',');
		return medicationArray;
	};

	const openModalNewTreatment = () => {
		if (
			treatmentsResults?.find((treatment) => treatment.finishDate === null)
		) {
			dispatch(
				setModalOpen({
					open: true,
					type: ModalTypeEnum.TREATMENT_MODAL,
					id: treatmentsResults?.find(
						(treatment) => treatment.finishDate === null,
					).id,
					patientId: patientId,
				}),
			);
		} else {
			dispatch(switchToEdit());
			dispatch(
				setModalOpen({
					open: true,
					type: ModalTypeEnum.TREATMENT_MODAL,
					patientId: patientId,
				}),
			);
		}
	};

	return (
		<Card
			title={'Tratamientos'}
			icon={<PillIcon />}
			width={'305px'}
			height={'686px'}
			align={'top'}
			css={{
				marginTop: '30px',
			}}
		>
			<StyledBox
				css={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					height: '-webkit-fill-available',
					paddingBottom: '20px',
				}}
			>
				<StyledTreatmentItemContainer>
					{isLoadingTreatment && (
						<StyledBox
							css={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								height: '100%',
							}}
						>
							<StyledCircularProgress />
						</StyledBox>
					)}
					{treatmentsResults?.length === 0 ? (
						<StyledBox
							css={{
								height: '100%',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<StyledP css={{ color: theme.oncoGrey2 }}>
								No se encontraron tratamientos
							</StyledP>
						</StyledBox>
					) : (
						<StyledBox
							css={{
								height: '100%',
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-between',
							}}
						>
							<StyledBox css={{ height: 'auto' }}>
								{treatmentsResults?.map((treatment, index) => (
									<TreatmentItem
										medications={parseMedicationList(
											treatment.treatment,
										)}
										id={treatment.id}
										status={treatment.status}
										startedDate={parseDate(treatment.startDate)}
										finishDate={parseDate(treatment.finishDate)}
									/>
								))}
							</StyledBox>

							<StyledBox
								css={{
									boxSizing: 'border-box',
									width: '100%',
									height: '31px',
									background: '#FFFFFF',
									border: '1px solid #E1D1FC',
									borderRadius: '20px',
									marginTop: '15px',
									padding: '7px 62px',
									display: 'flex',
									flexDirection: 'row',
									columnGap: '5px',
									alignItems: 'center',
									cursor: 'pointer',
									'&:hover': {
										boxShadow:
											'0px 4px 24px rgba(214, 203, 252, 0.3)',
										transition: 'all 0.2s ease-out',
									},
								}}
								onClick={() => openModalNewTreatment()}
							>
								<PlusCircleIcon />
								<StyledP
									css={{
										fontStyle: 'normal',
										fontWeight: 400,
										fontSize: '11px',
										alignItems: 'center',
										letterSpacing: '0.05em',
										textTransform: 'capitalize',
										color: '#AF7EFF',
										whiteSpace: 'nowrap',
									}}
								>
									Nuevo Tratamiento
								</StyledP>
							</StyledBox>
						</StyledBox>
					)}
				</StyledTreatmentItemContainer>
			</StyledBox>
		</Card>
	);
};

export default TreatmentSection;
