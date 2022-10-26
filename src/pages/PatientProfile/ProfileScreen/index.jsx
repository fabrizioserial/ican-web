import React, { useEffect } from 'react';
import {
	StyledBox,
	StyledScreen,
} from '../../../common/styledCommonComponents';
import HungerAndThirstChart from '../../../components/HungerAndThirstChart';
import SocialAndPhysicalActivitiesChart from '../../../components/SocialAndPhysicalActivitiesChart';
import PatientProfileCard from '../../../components/PatientProfileCard';
import WeeklySchedule from '../../Profile/WeeklySchedule';
import { useParams } from 'react-router';
import { useLazyGetPatientDataQuery } from '../../../redux/api/patientApi';

const ProfileScreen = () => {
	const { patientId } = useParams()
	const [refetch, { data, isSuccess }] = useLazyGetPatientDataQuery()

	useEffect(() => {
		refetch(patientId)
	}, [])

	useEffect(() => {
		console.log(data)
	}, [data, isSuccess])

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
				<PatientProfileCard profileData={data}/>
				<StyledBox
					css={{
						display: 'flex',
						flexDirection: 'row',
						marginTop: '30px',
					}}
				>
					<HungerAndThirstChart />
					<SocialAndPhysicalActivitiesChart />
				</StyledBox>
			</StyledBox>
			<StyledBox css={{ paddingLeft: '59px' }}>
				<WeeklySchedule />
			</StyledBox>
		</StyledScreen>
	);
};

export default ProfileScreen;
