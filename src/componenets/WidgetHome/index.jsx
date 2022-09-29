import React from 'react';
import { StyledBox, StyledCardHome } from '../../common/styledCommonComponents';
import WeeklySummary from '../WeeklySummary';
import UsersSummary from '../UsersSummary';

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
			<UsersSummary />
		</StyledBox>
	);
};

export default WidgetHome;
