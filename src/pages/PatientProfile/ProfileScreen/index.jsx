import React, { useEffect, useState } from 'react';
import {
	StyledBox,
	StyledScreen,
} from '../../../common/styledCommonComponents';
import HungerAndThirstChart from '../../../components/HungerAndThirstChart';
import SocialAndPhysicalActivitiesChart from '../../../components/SocialAndPhysicalActivitiesChart';
import PatientProfileCard from '../../../components/PatientProfileCard';
import WeeklySchedule from '../../Profile/WeeklySchedule';
import { useParams } from 'react-router';
import { useLazyGetAppetiteHydrationQuery, useLazyGetPatientDataQuery, useLazyGetSocialPhysicalQuery } from '../../../redux/api/patientApi';

const ProfileScreen = () => {
	const { patientId } = useParams()
	const [refetchPatientData, { data: dataPatient, isSuccess: isSuccessPatient }] = useLazyGetPatientDataQuery()
	const [refetchAppetiteHydration, { data: dataAppetiteHydration, isSuccess: isSuccessAppetiteHydration }] = useLazyGetAppetiteHydrationQuery()
	const [refetchSocialPhysical, { data: dataSocialPhysical, isSuccess: isSuccessSocialPhysical }] = useLazyGetSocialPhysicalQuery()

	const [appetiteHydration, setAppetiteHydration] = useState()
	const [socialPhysical, setSocialPhysical] = useState()

	useEffect(() => {
		refetchPatientData(patientId)
		refetchAppetiteHydration(patientId)
		refetchSocialPhysical(patientId)
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

	return (
		<StyledScreen
			css={{
				display: 'flex',
				flexDirection: 'row',
				padding: '30px 60px',
				boxSizing: 'border-box',
				justifyContent: 'center',
			}}
		>
			<StyledBox css={{ display: 'flex', flexDirection: 'column' }}>
				<PatientProfileCard profileData={dataPatient} />
				<StyledBox
					css={{
						display: 'flex',
						flexDirection: 'row',
						marginTop: '30px',
					}}
				>
					<HungerAndThirstChart data={appetiteHydration} />
					<SocialAndPhysicalActivitiesChart data={socialPhysical} />
				</StyledBox>
			</StyledBox>
			<StyledBox css={{ paddingLeft: '59px' }}>
				<WeeklySchedule />
			</StyledBox>
		</StyledScreen>
	);
};

export default ProfileScreen;
