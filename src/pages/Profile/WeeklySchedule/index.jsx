import React, { useState } from 'react';
import { StyledBox, StyledP } from '../../../common/styledCommonComponents';
import CalendarIcon from '../../../assets/CalendarIcon';
import BackIcon from '../../../assets/BackIcon';
import DayCard from './DayCard';
import { WeeklyScheduleConfig } from '../../../utils/utils';
import HungryIcon from '../../../assets/HungryIcon';
import Card from '../../../components/Card';

const WeeklySchedule = () => {
	const [dayList, setDayList] = useState(WeeklyScheduleConfig);
	return (
		<Card
			title={'Agenda Semanal'}
			icon={<CalendarIcon />}
			width={305}
			height={200}
		>
			<>
				<StyledBox>
					<StyledBox
						css={{
							display: 'flex',
							flexDirection: 'row',
							columnGap: '123px',
							paddingTop: '21px',
							paddingRight: '18px',
							paddingLeft: '18px',
						}}
					>
						<StyledBox
							css={{
								display: 'flex',
								flexDirection: 'row',
								columnGap: '6px',
							}}
						>
							<BackIcon></BackIcon>
							<StyledP
								css={{
									width: '45px',
									height: '13px',
									fontStyle: 'normal',
									fontWeight: 300,
									fontSize: '11px',
									lineHeight: '13px',
									display: 'flex',
									alignItems: 'center',
									letterSpacing: '0.05em',
									textTransform: 'capitalize',
									color: '#949494',
								}}
							>
								Anterior
							</StyledP>
						</StyledBox>
						<StyledBox
							css={{
								display: 'flex',
								flexDirection: 'row',
							}}
						>
							<StyledP
								css={{
									width: '74px',
									height: '13px',
									fontStyle: 'normal',
									fontWeight: 500,
									fontSize: '11px',
									lineHeight: '13px',
									display: 'flex',
									alignItems: 'center',
									letterSpacing: '0.05em',
									textTransform: 'capitalize',
									color: '#AF7EFF',
									whiteSpace: 'nowrap',
									justifyContent: 'flex-end',
								}}
							>
								Esta Semana
							</StyledP>
						</StyledBox>
					</StyledBox>
				</StyledBox>
				<StyledBox
					css={{
						display: 'flex',
						flexDirection: 'row',
						columnGap: '7px',
						padding: '20px 18px',
					}}
				>
					{dayList.map((item, index) => (
						<DayCard
							key={index}
							index={index}
							dayNumber={item.dayNumber}
							dayName={item.dayName}
							state={item.state}
							detail={item.detail}
						/>
					))}
				</StyledBox>
			</>
		</Card>
	);
};

export default WeeklySchedule;
