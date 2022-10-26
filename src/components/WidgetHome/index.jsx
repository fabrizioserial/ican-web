import React from 'react';
import { StyledBox } from '../../common/styledCommonComponents';
import WeeklySummary from '../WeeklySummary';
import WaitingList from '../WaitingList';

const WidgetHome = () => {
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
			<WaitingList />
		</StyledBox>
	);
};

export default WidgetHome;
