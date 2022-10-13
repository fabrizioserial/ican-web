import React from 'react';
import {
	StyledBox,
	StyledScreen,
} from '../../../common/styledCommonComponents';
import HungerAndThirstChart from '../../../componenets/HungerAndThirstChart';
import SocialAndPhysicalActivitiesChart from '../../../componenets/SocialAndPhysicalActivitiesChart';

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
				<StyledBox css={{ display: 'flex', flexDirection: 'row' }}>
					<HungerAndThirstChart />
					<SocialAndPhysicalActivitiesChart />
				</StyledBox>
			</StyledBox>
		</StyledScreen>
	);
};

export default ProfileScreen;
