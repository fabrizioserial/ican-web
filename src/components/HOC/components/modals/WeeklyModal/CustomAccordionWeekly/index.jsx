import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { StyledCustomAccordion } from './styles';
import {
	StyledBox,
	StyledP,
} from '../../../../../../common/styledCommonComponents';
import CrossIcon from '../../../../../../assets/CrossIcon';
import WeeklyIcon from '../../../../../../assets/WeeklyIcon';
import { useTheme } from 'styled-components';
import {
	CapitalizeText,
	getAnswersByType,
	getIconByCategory,
	translateQuestion,
} from '../../../../../../utils/utils';

const CustomAccordionWeekly = ({
	category,
	endDate = '12 de noviembre de 2022',
	symptoms,
}) => {
	const theme = useTheme();
	return (
		<StyledCustomAccordion>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls={`panel${category}-content`}
				id={`panel${category}-header`}
			>
				{getIconByCategory(category)}
				<StyledBox
					css={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						marginLeft: '18px',
					}}
				>
					<StyledP css={{ fontSize: '18px', fontWeight: 500 }}>
						{category}
					</StyledP>
					<StyledP
						css={{
							fontSize: '12px',
							color: theme.oncoGrey3,
							fontWeight: 400,
						}}
					>
						Completado {endDate}
					</StyledP>
				</StyledBox>
			</AccordionSummary>
			<AccordionDetails>
				{symptoms.map((symp) => {
					return (
						<StyledBox css={{ marginLeft: '50px' }}>
							<StyledP css={{ fontSize: '14px', fontWeight: 500 }}>
								{CapitalizeText(symp.name)}
							</StyledP>
							<StyledBox
								css={{
									backgroundColor: '#F8F8F8',
									padding: '20px 20px',
									borderRadius: '20px',
									margin: '10px 0 30px',
								}}
							>
								{symp.questions.map((ans) => (
									<StyledBox
										css={{
											display: 'flex',
											flexDirection: 'row',
											padding: '10px 0',
										}}
									>
										{ans.date ? (
											<>
												<StyledP
													css={{
														width: '20%',
														color: theme.oncoGrey2,
														fontSize: '16px',
													}}
												>
													{ans.date}
												</StyledP>
												<StyledP
													css={{
														width: '40%',
														fontWeight: 500,
														fontSize: '16px',
													}}
												>
													{translateQuestion(ans.type)}
												</StyledP>
												<StyledP
													css={{
														width: '40%',
														fontSize: '16px',
														color: theme.oncoDarkPurple,
													}}
												>
													{
														getAnswersByType(ans.type)?.find(
															(res) => res.value === ans.value,
														).label
													}
												</StyledP>
											</>
										) : (
											<>
												<StyledP css={{ fontSize: '14px' }}>
													No hay respuesta registrada
												</StyledP>
											</>
										)}
									</StyledBox>
								))}
							</StyledBox>
						</StyledBox>
					);
				})}
			</AccordionDetails>
		</StyledCustomAccordion>
	);
};

export default CustomAccordionWeekly;
