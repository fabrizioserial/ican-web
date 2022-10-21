import React from 'react';
import PatientsList from '../../components/PatientsList';
import { StyledBox, StyledScreen } from '../../common/styledCommonComponents';
import WidgetHome from '../../components/WidgetHome';
import WidgetPastelStats from '../../components/WidgetPastelStats';
import WaitingList from '../../components/WaitingList';
import { useSelector } from 'react-redux';

function HomeScreen() {
	const waitingPatients = useSelector(state => state.homeSlice.waitingPatients);

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
						flex: 0.5,
						maxWidth: '760px',
						rowGap: '35px'
					}}>
					<WidgetHome />
					<WidgetPastelStats />
				</StyledBox>

				<StyledBox css={{ display: 'flex', justifyContent: "space-evenly", flex: 0.5 }}>
					<PatientsList />
					<WaitingList waitingPatients={waitingPatients} />
				</StyledBox>
			</StyledBox>
		</StyledBox>
	);
}

export default HomeScreen;
