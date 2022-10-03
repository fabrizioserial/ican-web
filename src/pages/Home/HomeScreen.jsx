import React from 'react';
import PatientsList from '../../componenets/PatientsList';
import {StyledBox, StyledScreen} from '../../common/styledCommonComponents';
import WidgetHome from '../../componenets/WidgetHome';

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
					justifyContent: 'space-between',
				}}
			>
				<StyledBox
					css={{
						display: 'flex',
						flexDirection: 'column',
						flex: 0.6,
						maxWidth: '760px',
					}}
				>
					<WidgetHome />
				</StyledBox>
				<StyledBox
					css={{ display: 'flex', flex: 0.4, justifyContent: 'flex-end' }}
				>
					<PatientsList />
				</StyledBox>
			</StyledBox>
		</StyledScreen>
	);
}

export default HomeScreen;
