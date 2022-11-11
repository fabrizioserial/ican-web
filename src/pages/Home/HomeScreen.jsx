import React from 'react';
import PatientsList from '../../components/PatientsList';
import { StyledBox, StyledScreen } from '../../common/styledCommonComponents';
import WidgetHome from '../../components/WidgetHome';
import WidgetPastelStats from '../../components/WidgetPastelStats';
import WidgetDailyChart from '../../components/WidgetDailyChart';

function HomeScreen() {
	return (
		<StyledScreen>
			<StyledBox
				css={{
					display: 'flex',
					flexDirection: 'row',
					margin: '30px 60px',
					height: 'inherit',
					width: 'inherit',
					justifyContent: 'center',
				}}
			>
				<StyledBox
					css={{
						display: 'flex',
						flexDirection: 'column',
						maxWidth: '777px',
					}}
				>
					<WidgetHome />
					<WidgetPastelStats />
					<WidgetDailyChart />
				</StyledBox>
				<StyledBox css={{ display: 'flex', marginLeft: '35px' }}>
					<PatientsList />
				</StyledBox>
			</StyledBox>
		</StyledScreen>
	);
}

export default HomeScreen;
