import React from 'react';
import PatientsList from '../../componenets/PatientsList';
import { StyledBox, StyledScreen } from '../../common/styledCommonComponents';
import WidgetHome from '../../componenets/WidgetHome';
import WidgetPastelStats from '../../componenets/WidgetPastelStats';
import WaitingList from '../../componenets/WaitingList';
import { useSelector } from 'react-redux';

function HomeScreen() {
	const waitingPatients = useSelector(state => state.homeSlice.waitingPatients);
	console.log(waitingPatients); // DEV


	return (
		<StyledBox
			css={{
				flex: 1,
				display: 'flex',
				flexDirection: 'column',
				paddingTop: '60px',
				paddingLeft: "60px",
			}}
		>

			<StyledBox css={{ display: 'flex' }}>
				<StyledBox
					css={{
						display: 'flex',
						flexDirection: 'column',
						flex: 0.6,
						maxWidth: '760px',
						rowGap: '35px',
					}}>
					<WidgetHome />
					<WidgetPastelStats />
				</StyledBox>

				<StyledBox css={{ display: 'flex', flex: 0.4, marginLeft: '50px' }}>
					<PatientsList />
				</StyledBox>

				<StyledBox css={{ display: 'flex', flex: 0.4 }}>
					<WaitingList waitingPatients={waitingPatients} />
				</StyledBox>
			</StyledBox>
		</StyledBox>
	);
}

export default HomeScreen;
