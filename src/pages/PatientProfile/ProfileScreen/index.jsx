import React from 'react';
import {
	StyledBox,
	StyledScreen,
} from '../../../common/styledCommonComponents';
import HungerAndThirstChart from '../../../components/HungerAndThirstChart';
import SocialAndPhysicalActivitiesChart from '../../../components/SocialAndPhysicalActivitiesChart';
import PatientProfileCard from '../../../components/PatientProfileCard';

const ProfileScreen = () => {
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
		</StyledScreen>
	);
};

export default ProfileScreen;
