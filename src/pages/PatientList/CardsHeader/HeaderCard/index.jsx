import { useTheme } from 'styled-components';
import {
	StyledBox,
	StyledP,
	StyledPatientsListCard,
} from '../../../../common/styledCommonComponents';
import React from 'react';
import ReactTooltip from 'react-tooltip';

function PatientsHeaderCard({ text, number, positive, pillText, pillDetail }) {
	const theme = useTheme();
	const color = positive
		? theme.patientListPillPositive
		: theme.patientListPillNegative;
	return (
		<StyledPatientsListCard
			css={{
				padding: '22px 24px',
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'end',
				justifyContent: 'space-between',
				flex: 1,
			}}
		>
			<StyledBox
				css={{
					display: 'flex',
					flexDirection: 'column',
					columnGap: '17px',
					rowGap: '14px',
					flexWrap: 'wrap',
				}}
			>
				<StyledP
					css={{
						width: '107px',
						height: '13px',
						fontStyle: 'normal',
						fontWeight: 500,
						fontSize: '11px',
						lineHeight: '13px',
						display: 'flex',
						alignItems: 'center',
						letterSpacing: '0.05em',
						flexDirection: 'row',
						whiteSpace: 'nowrap',
					}}
				>
					{text}
				</StyledP>
				<StyledP
					css={{
						width: '107px',
						height: '29px',
						fontStyle: 'normal',
						fontWeight: 500,
						fontSize: 35,
						lineHeight: '42px',
						display: 'flex',
						alignItems: 'center',
						letterSpacing: '0.05em',
						color: '#5F5F5F',
					}}
				>
					{number}
				</StyledP>
			</StyledBox>
			{pillText && (
				<StyledBox
					data-tip
					data-for={'pillTip' + text}
					css={{
						alignItems: 'end',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'flex-end',
						width: '45px',
						height: '18px',
						background: color,
						boxShadow: '0px 4px 24px rgba(214, 203, 252, 0.3)',
						borderRadius: '15px',
					}}
				>
					<ReactTooltip id={'pillTip' + text} place="top" effect="solid">
						{pillDetail}
					</ReactTooltip>

					<StyledP
						css={{
							width: '12px',
							height: '13px',
							fontStyle: 'normal',
							fontWeight: 500,
							fontSize: '11px',
							lineHeight: '13px',
							display: 'flex',
							alignContent: 'center',
							color: '#949494',
							padding: '2px 16px',
						}}
					>
						{pillText}
					</StyledP>
				</StyledBox>
			)}
		</StyledPatientsListCard>
	);
}

export default PatientsHeaderCard;
