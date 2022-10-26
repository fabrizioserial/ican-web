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

const ProfileScreen = () => {
	const { patientId } = useParams()
	useEffect(() => {
		console.log(patientId)
	}, [])
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
				<PatientProfileCard />
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
