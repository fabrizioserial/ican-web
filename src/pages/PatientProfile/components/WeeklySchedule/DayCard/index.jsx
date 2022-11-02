import React from 'react';
import {
	StyledBox,
	StyledP,
} from '../../../../../common/styledCommonComponents';
import { useTheme } from 'styled-components';
import ReactTooltip from 'react-tooltip';

const DayCard = ({ dayNumber, dayName, state, detail, index }) => {
	const theme = useTheme();
	return (
		<StyledBox
			data-tip
			data-for={'dayTip' + dayNumber}
			css={{
				boxSizing: 'border-box',
				width: '33px',
				height: '52px',
				background: index === 6 ? theme.calendarPurple : theme.white,
				boxShadow: '0px 4px 24px rgba(214, 203, 252, 0.15)',
				borderRadius: '10px',
				border:
					state === 'green'
						? '1px solid rgba(100, 201, 140, 0.5)'
						: '1px solid rgba(225, 209, 252, 0.22)',
				cursor: state === 'green' ? 'pointer' : 'normal',
			}}
		>
			{state === 'green' && (
				<ReactTooltip id={'dayTip' + dayNumber} place="top" effect="solid">
					{detail}
				</ReactTooltip>
			)}

			<StyledBox
				css={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'space-between',
					height: '100%',
					padding: '8px 0',
					boxSizing: 'border-box',
				}}
			>
				<StyledP
					css={{
						fontStyle: 'normal',
						fontWeight: 500,
						fontSize: '12px',
						display: 'flex',
						alignItems: 'center',
						textTransform: 'uppercase',
						color: index === 6 ? theme.white : theme.calendarGrey,
					}}
				>
					{dayNumber}
				</StyledP>
				<StyledP
					css={{
						fontStyle: 'normal',
						fontWeight: 300,
						fontSize: '12px',
						display: 'flex',
						alignItems: 'center',
						textTransform: 'uppercase',
						color: index === 6 ? theme.white : theme.calendarGrey,
					}}
				>
					{' '}
					{dayName}
				</StyledP>
			</StyledBox>
		</StyledBox>
	);
};

export default DayCard;
