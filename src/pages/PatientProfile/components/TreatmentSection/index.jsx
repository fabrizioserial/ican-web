import React, {useEffect, useState} from 'react';
import { StyledBox, StyledP } from '../../../../common/styledCommonComponents';

import { useTheme } from 'styled-components';
import Card from '../../../../components/Card';
import PillIcon from '../../../../assets/PillIcon';
import PlusCircleIcon from '../../../../assets/PlusCircleIcon';
import TreatmentItem from './TreatmentItem';
import {useParams} from "react-router";
import { useGetPatientTreatmetsQuery} from "../../../../redux/api/patientApi";
import _ from "lodash"
import {StyledTreatmentItemContainer} from "./TreatmentItemContainer";

const TreatmentSection = () => {
	const theme = useTheme();

	const { patientId } = useParams();
	const { data: treatmentsData, isSuccess: isSuccessTreatmentsData }
		= useGetPatientTreatmetsQuery(patientId);
	const [treatmentsResults, setTreatmentsResults] = useState(undefined);

	useEffect(() => {
		console.log(treatmentsData)
		if (treatmentsData) {
			let finalArray=[]
			const finalizedTreatments = treatmentsData.filter(treatment => {
				return treatment.finishDate !== null;
			});
			const currentTreatment = treatmentsData.filter(treatment => {
				return treatment.finishDate === null;
			});

			finalArray= finalArray.concat(
				finalizedTreatments.map((item)=>({...item, status:"finalized"})),
				currentTreatment.map(item =>({...item, status:"current"}
			)).filter(item => item.id))
			finalArray = _.orderBy(finalArray,"date",'desc')
			setTreatmentsResults(finalArray);
		}
	}, [isSuccessTreatmentsData,treatmentsData]);


	const parseDate = (DayItem) => {
		let dayObject = new Date(DayItem);
		let day =
			dayObject.getDate().toString() +
			'/' +
			dayObject.getMonth() + 1;
		return day;
	};


	const parseMedicationList=(medications) =>{
		const medicationArray = medications.split(',');
		console.log(medicationArray)
		return medicationArray
	}


	return (
		<Card
			title={'Tratamientos'}
			icon={<PillIcon />}
			width={'305px'}
			height={'676px'}
			align={'top'}
		>
			<StyledBox
				css={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					height: '100%',
					paddingBottom: '20px',
				}}
			>
				<StyledTreatmentItemContainer>
				{treatmentsResults?.map((treatment,index) => (
				<TreatmentItem
					medications={parseMedicationList(treatment.treatment)}
					id={index}
					status={treatment.status}
					startedDate={parseDate(treatment.startDate)}
					finishDate={parseDate(treatment.finishDate)}
				/>
				))}
				</StyledTreatmentItemContainer>
				<StyledBox
					css={{
						boxSizing: 'border-box',
						width: '255px',
						height: '31px',
						background: '#FFFFFF',
						border: '1px solid #E1D1FC',
						borderRadius: '20px',
						padding: '7px 62px',
						display: 'flex',
						flexDirection: 'row',
						columnGap: '5px',
						alignItems: 'center',
						cursor: 'pointer',
						'&:hover': {
							boxShadow: '0px 4px 24px rgba(214, 203, 252, 0.3)',
							transition: 'all 0.2s ease-out',
						},
					}}
				>
					<PlusCircleIcon />
					<StyledP
						css={{
							width: '108px',
							height: '13px',
							fontStyle: 'normal',
							fontWeight: 400,
							fontSize: '11px',
							lineHeight: '13px',
							display: 'flex',
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
		</Card>
	);
};

export default TreatmentSection;
