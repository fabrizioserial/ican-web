import React from 'react';
import { StyledBox, StyledCardHome } from '../../common/styledCommonComponents';
import WeeklySummary from '../WeeklySummary';
import UsersSummary from '../UsersSummary';
import WaitingList from '../WaitingList';
import { useSelector } from 'react-redux';

const WidgetHome = () => {
	const waitingPatients = useSelector(state => state.homeSlice.waitingPatients);

	return (
		<StyledBox
			css={{
				width: 'inherit',
				height: '230px',
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-between',
			}}
		>
			<WeeklySummary />
			<WaitingList waitingPatients={waitingPatients} />
		</StyledBox>
	);
};

export default WidgetHome;
