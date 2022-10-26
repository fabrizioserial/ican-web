import React from 'react';
import { StyledBox } from '../../../../../../common/styledCommonComponents';
import { Accordion } from '@mui/material';
import CustomAccordionWeekly from '../CustomAccordionWeekly';

const Body = ({
	answers = [
		{
			categoryName: 'Respiratorio',
			symptoms: [
				{
					symptomName: 'Asma',
					answers: [
						{ type: 'Severity', value: 0, date: '12/12/12' },
						{ type: 'Frequency', value: 2, date: '12/12/12' },
						{ type: 'Amount', value: 1, date: '12/12/12' },
					],
				},
				{
					symptomName: 'Asma',
					answers: [
						{ type: 'Severity', value: 0, date: '12/12/12' },
						{ type: 'Frequency', value: 2, date: '12/12/12' },
						{ type: 'Amount', value: 1, date: '12/12/12' },
					],
				},
				{
					symptomName: 'Asma',
					answers: [
						{ type: 'Severity', value: 0, date: '12/12/12' },
						{ type: 'Frequency', value: 2, date: '12/12/12' },
						{ type: 'Amount', value: 1, date: '12/12/12' },
					],
				},
				{
					symptomName: 'Asma',
					answers: [
						{ type: 'Severity', value: 0, date: '12/12/12' },
						{ type: 'Frequency', value: 2, date: '12/12/12' },
						{ type: 'Amount', value: 1, date: '12/12/12' },
					],
				},
			],
		},
		{
			categoryName: 'Oral',
			symptoms: [
				{
					symptomName: 'Asma',
					answers: [
						{ type: 'Severity', value: 0, date: '12/12/12' },
						{ type: 'Frequency', value: 2, date: '12/12/12' },
						{ type: 'Amount', value: 1, date: '12/12/12' },
					],
				},
				{
					symptomName: 'Asma',
					answers: [
						{ type: 'Severity', value: 0, date: '12/12/12' },
						{ type: 'Frequency', value: 2, date: '12/12/12' },
						{ type: 'Amount', value: 1, date: '12/12/12' },
					],
				},
				{
					symptomName: 'Asma',
					answers: [
						{ type: 'Severity', value: 0, date: '12/12/12' },
						{ type: 'Frequency', value: 2, date: '12/12/12' },
						{ type: 'Amount', value: 1, date: '12/12/12' },
					],
				},
			],
		},
	],
}) => {
	return (
		<StyledBox css={{ padding: '30px 30px 40px' }}>
			{answers.map((cat) => (
				<CustomAccordionWeekly
					category={cat.categoryName}
					symptoms={cat.symptoms}
				/>
			))}
		</StyledBox>
	);
};

export default Body;
