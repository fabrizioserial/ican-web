import React, { useEffect, useState } from 'react';
import {
	StyledBox,
	StyledScreen,
} from '../../../common/styledCommonComponents';
import HungerAndThirstChart from '../../../components/HungerAndThirstChart';
import SocialAndPhysicalActivitiesChart from '../../../components/SocialAndPhysicalActivitiesChart';
import PatientProfileCard from '../../../components/PatientProfileCard';
import { useParams } from 'react-router';
import { useLazyGetAppetiteHydrationQuery, useLazyGetCalendarQuery, useLazyGetPatientDataQuery, useLazyGetSocialPhysicalQuery } from '../../../redux/api/patientApi';
import WeeklySchedule from '../components/WeeklySchedule';
import TreatmentSection from '../components/TreatmentSection';

const ProfileScreen = () => {
	const { patientId } = useParams()
	const [refetchPatientData, { data: dataPatient, isSuccess: isSuccessPatient }] = useLazyGetPatientDataQuery()
	const [refetchAppetiteHydration, { data: dataAppetiteHydration, isSuccess: isSuccessAppetiteHydration }] = useLazyGetAppetiteHydrationQuery()
	const [refetchSocialPhysical, { data: dataSocialPhysical, isSuccess: isSuccessSocialPhysical }] = useLazyGetSocialPhysicalQuery()
	const [refetchCalendar, { data: dataCalendar, isSuccess: isSuccessCalendar }] = useLazyGetCalendarQuery()

	const [appetiteHydration, setAppetiteHydration] = useState()
	const [socialPhysical, setSocialPhysical] = useState()
	const [calendar, setCalendar] = useState()

	useEffect(() => {
		refetchPatientData(patientId)
		refetchAppetiteHydration(patientId)
		refetchSocialPhysical(patientId)
		refetchCalendar(patientId)
	}, [])

	useEffect(() => {
		let aux = {}
		let day = ''
		dataAppetiteHydration &&
			Object.values(dataAppetiteHydration).forEach(item => {
				day = new Date(item.date).getDate() + "/" + new Date(item.date).getMonth()
				aux[day] = [item.apettite, item.hydration]
			})
		setAppetiteHydration(aux)
	}, [isSuccessAppetiteHydration])

	useEffect(() => {
		let aux = {}
		let day = ''
		dataSocialPhysical &&
			Object.values(dataSocialPhysical).forEach(item => {
				day = new Date(item.date).getDate() + "/" + new Date(item.date).getMonth()
				aux[day] = [item.social, item.physical]
			})
		setSocialPhysical(aux)
	}, [isSuccessSocialPhysical])

	const dayName = (day) => {
		switch (day) {
			case 0:
				return 'L'
			case 1:
				return 'M'
			case 2:
				return 'M'
			case 3:
				return 'J'
			case 4:
				return 'V'
			case 5:
				return 'S'
			case 6:
				return 'D'
			default:
				break;
		}
	}
	const dayState = (status) => {
		switch (status) {
			case 'Completed':
				return {
					state: 'green',
					detail: 'Completo la encuesta semanal'
				}
			default:
				return {
					state: 'grey',
					detail: 'Nada para reportar'
				}
		}
	}

	useEffect(() => {
		let aux = []
		dataCalendar &&
			Object.values(dataCalendar).forEach(item => {
				aux.push({
					id: item.weeklyId,
					dayNumber: new Date(item.date).getDay(),
					dayName: dayName(new Date(item.date).getDay()),
					state: dayState(item.weeklyStatus).state,
					detail: dayState(item.weeklyStatus).detail
				})
			})
		setCalendar(aux)
	}, [isSuccessCalendar])

	return (
		<StyledScreen
			css={{
				display: 'flex',
				flexDirection: 'row',
				columnGap: 40,
				padding: '30px',
			}}
		>
			<StyledBox
				css={{
					flex: 0.7,
					flexDirection: 'column',
				}}
			>
				<PatientProfileCard profileData={dataPatient} />
				<StyledBox
					css={{
						display: 'flex',
						flexDirection: 'row',
						marginTop: '30px',
						columnGap: 30
					}}
				>
					<HungerAndThirstChart data={appetiteHydration} />
					<SocialAndPhysicalActivitiesChart data={socialPhysical} />
				</StyledBox>
			</StyledBox>
			<StyledBox
				css={{
					paddingLeft: '59px',
					display: 'flex',
					flexDirection: 'column',
					flexWrap: 'wrap',
					rowGap: '21px',
				}}
			>
				<WeeklySchedule dayList={calendar} />
				<TreatmentSection />
			</StyledBox>
		</StyledScreen>
	);
};

export default ProfileScreen;
