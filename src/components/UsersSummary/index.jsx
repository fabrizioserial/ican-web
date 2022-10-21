import React, { useMemo, useState } from 'react';
import {
	StyledBox,
	StyledCardHome,
	StyledImg,
	StyledP,
	StyledSpan,
} from '../../common/styledCommonComponents';
import { useTheme } from 'styled-components';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { usePatientsReportQuery } from '../../redux/api/homeApi';

const UsersSummary = () => {
	const theme = useTheme();
	const { data } = usePatientsReportQuery();
	const patientsReport = useSelector(
		(state) => state.homeSlice.weeklyGeneralPatientsReport,
	);

	const users = useMemo(
		() => ({
			activeUsers: {
				amount: patientsReport.active,
				users: ['', '', '', ''], // TODO AVATAR
			},
			waitingUsers: {
				amount: patientsReport.pending,
				users: ['', '', '', ''], // TODO AVATAR
			},
		}),
		[patientsReport],
	);

	return (
		<StyledCardHome
			css={{
				width: '230px',
				height: '230px',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				color: theme.oncoBlack,
			}}
		>
			<StyledBox css={{ display: 'flex', flexDirection: 'column' }}>
				<StyledP css={{ fontWeight: 500, fontSize: '0.875rem' }}>
					<StyledSpan
						css={{
							fontWeight: 700,
							marginRight: '3px',
							fontSize: '16px',
						}}
					>
						{users.activeUsers.amount}
					</StyledSpan>
					Pacientes totales
				</StyledP>
				<StyledBox
					css={{
						display: 'flex',
						flexDirection: 'row',
						marginTop: '10px',
					}}
				>
					{users?.activeUsers?.users?.map((value, index) => (
						<StyledImg
							key={index}
							css={{
								marginLeft: '-5px',
								border: '1px solid white',
								width: 36,
								height: 36,
								borderRadius: '50px',
								imageRendering: '',
							}}
							firstChild={{
								marginLeft: '0px',
							}}
							src={
								'https://media.discordapp.net/attachments/411201278031560708/1023937441264054302/default_user.png'
							}
						/>
					))}
					<StyledBox
						as={Link}
						css={{
							width: 36,
							height: 36,
							border: '1px solid white',
							background: theme.OncoPurple,
							marginLeft: '-5px',
							borderRadius: '50px',
							fontSize: '6px',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							cursor: 'pointer',
							textDecorationLine: 'none',
						}}
						to={'/'} // TODO: Change url
					>
						<StyledP css={{ textAlign: 'center', color: 'white' }}>
							Ver mas
						</StyledP>
					</StyledBox>
				</StyledBox>
			</StyledBox>
			<StyledBox
				css={{
					display: 'flex',
					flexDirection: 'column',
					marginTop: '20px',
				}}
			>
				<StyledP css={{ fontWeight: 500, fontSize: '0.875rem' }}>
					<StyledSpan
						css={{
							fontWeight: 700,
							marginRight: '3px',
							fontSize: '16px',
						}}
					>
						{users.waitingUsers.amount}
					</StyledSpan>
					Pacientes en espera
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
								width: 36,
								height: 36,
								borderRadius: '50px',
								imageRendering: '',
							}}
							src={
								'https://media.discordapp.net/attachments/411201278031560708/1023937441264054302/default_user.png'
							}
						/>
					))}
					<StyledBox
						as={Link}
						css={{
							width: 36,
							height: 36,
							border: '1px solid white',
							background: theme.OncoPurple,
							marginLeft: '-5px',
							borderRadius: '50px',
							fontSize: '6px',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							cursor: 'pointer',
							textDecorationLine: 'none',
						}}
						to={'/'} // TODO: Change url
					>
						<StyledP css={{ textAlign: 'center', color: 'white' }}>
							Ver mas
						</StyledP>
					</StyledBox>
				</StyledBox>
			</StyledBox>
		</StyledCardHome>
	);
};
export default UsersSummary;
