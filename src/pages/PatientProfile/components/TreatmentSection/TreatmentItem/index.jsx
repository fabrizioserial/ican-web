import React from 'react';
import {
	StyledBox,
	StyledP,
} from '../../../../../common/styledCommonComponents';
import { useTheme } from 'styled-components';

const TreatmentItem = ({
	medications,
	id,
	finishDate,
	startedDate,
	status ,
}) => {
	console.log(medications,id,finishDate,startedDate,status)
	const theme = useTheme();
	return (
		<StyledBox
			css={{
				display: 'flex',
				flexDirection: 'column',
				flexWrap: 'wrap',
				justifyContent: 'flex-start',
				alignItems: 'top',
				marginTop: '14px',
				alignSelf: 'top',
				cursor: 'pointer',
			}}
		>
			<StyledBox
				css={{
					boxSizing: 'border-box',
					width: '255px',
					height: '63px',
					background: theme.white,
					border: '1px solid rgba(225, 209, 252, 0.22)',
					boxShadow: '0px 4px 24px rgba(214, 203, 252, 0.15)',
					borderRadius: '10px',
					padding: '16px 16px',
				}}
			>
				<StyledBox
					css={{
						display: 'flex',
						flexDirection: 'row',
						columnGap: '40px',
					}}
				>
					<StyledP
						css={{
							width: '224px',
							height: '16px',
							fontStyle: 'normal',
							fontWeight: '400',
							fontSize: '13px',
							lineHeight: '16px',
							display: 'flex',
							alignItems: 'center',
							letterSpacing: '0.05em',
							textTransform: 'capitalize',
							color: status === 'finalized' ? '#949494' :'#5F5F5F'  ,
							whiteSpace: 'nowrap',
						}}
					>
						{medications.length > 0 ? medications[0] : ''}
					</StyledP>
					{medications.length > 1 &&
					<StyledP
						css={{
							width: '224px',
							height: '16px',
							fontStyle: 'normal',
							fontWeight: '400',
							fontSize: '13px',
							lineHeight: '16px',
							display: 'flex',
							alignItems: 'center',
							letterSpacing: '0.05em',
							textTransform: 'capitalize',
							color: theme.OncoPurple,
							justifyContent: 'flexEnd',
							whiteSpace: 'nowrap',
						}}
					>

						+ {medications.length-1}

					</StyledP>
					}
				</StyledBox>
				<StyledP
					css={{
						width: '100px',
						height: '11px',
						fontStyle: 'normal',
						fontWeight: 400,
						fontSize: '9px',
						lineHeight: '11px',
						display: 'flex',
						alignItems: 'center',
						letterSpacing: '0.05em',
						textTransform: 'capitalize',
						color: status === "current" ? '#AF7EFF' : '#FF505F',
						whiteSpace: 'nowrap',
					}}
				>
					{status === 'finalized' ? 'Finalizado' : 'Comienzo'} {startedDate}
				</StyledP>
			</StyledBox>
		</StyledBox>
	);
};

export default TreatmentItem;
