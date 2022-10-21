import { useTheme } from 'styled-components';
import {
	StyledBox,
	StyledImg,
	StyledP,
	StyledPatientsListCard,
} from '../../../common/styledCommonComponents';
import React, { useMemo } from 'react';
import { patientsReport } from '../../../redux/api/homeApi';

function WaitingListHeaderCard() {
	const theme = useTheme();
	const users = useMemo(
		() => ({
			waitingUsers: {
				amount: patientsReport.pending,
				users: ['', '', '', ''], // TODO AVATAR
			},
		}),
		[patientsReport],
	);

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
					Pacientes en espera
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
					{users?.length ?? 0}
				</StyledP>
			</StyledBox>
			<StyledBox
				css={{
					alignItems: 'end',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'flex-end',
					boxShadow: '0px 4px 24px rgba(214, 203, 252, 0.3)',
					borderRadius: '15px',
				}}
			>
				<StyledP
					css={{
						width: '43px',
						height: '13px',
						fontStyle: 'normal',
						fontWeight: 500,
						fontSize: '11px',
						lineHeight: '13px',
						display: 'flex',
						alignSelf: 'top',
						color: theme.OncoPurple,
						flexDirection: 'row',
						whiteSpace: 'nowrap',
					}}
				>
					{' '}
					Ver más
				</StyledP>

				<StyledBox
					css={{
						display: 'flex',
						flexDirection: 'row',
						marginTop: '10px',
					}}
				>
					{users?.waitingUsers?.users?.map((value, index) => (
						<StyledImg
							key={index}
							css={{
								marginLeft: '-5px',
								border: '1px solid white',
								width: 22,
								height: 22,
								borderRadius: '50px',
								imageRendering: '',
								boxShadow: '0px 4px 24px rgba(214, 203, 252, 0.3)',
							}}
							src={
								'https://media.discordapp.net/attachments/411201278031560708/1023937441264054302/default_user.png'
							}
						/>
					))}
				</StyledBox>
			</StyledBox>
		</StyledPatientsListCard>
	);
}

export default WaitingListHeaderCard;
