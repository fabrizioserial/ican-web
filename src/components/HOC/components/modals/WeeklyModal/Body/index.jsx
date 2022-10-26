import React from 'react';
import { StyledBox } from '../../../../../../common/styledCommonComponents';
import { Accordion } from '@mui/material';
import CustomAccordionWeekly from '../CustomAccordionWeekly';
import { useSelector } from 'react-redux';

const Body = () => {
	const weekly = useSelector((state) => state.homeSlice.weekly);

	return (
		<StyledBox css={{ padding: '30px 30px 40px' }}>
			{weekly.map((cat) => (
				<CustomAccordionWeekly
					category={cat.name}
					symptoms={cat.symptoms}
				/>
			))}
		</StyledBox>
	);
};

export default Body;
