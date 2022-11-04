import React, { useState } from 'react';
import { StyledBox } from '../../common/styledCommonComponents';
import NavItem from './NavItem';
import { useLocation } from 'react-router';
import {
	CapitalizeText,
	getProfileImageFromName,
	NavbarConfig,
	NavbarConfigBottom,
} from '../../utils/utils';
import { useTheme } from 'styled-components';
import BellIcon from '../../assets/BellIcon';
import { useDispatch } from 'react-redux';
import { logout, logoutNew } from '../../redux/slices/authSlice';
import LogoIcon from '../../assets/LogoIcon';
import ReactTooltip from 'react-tooltip';

const Navbar = () => {
	let location = useLocation();
	const [navbarList] = useState(NavbarConfig);
	const [navbarListBottom, setNavbarListBottom] = useState(NavbarConfigBottom);

	const theme = useTheme();
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(logoutNew());
	};

	return (
		<StyledBox
			css={{
				width: '70px',
				zIndex: 1,
				backgroundColor: theme.white,
				overflowX: 'hidden',
				minHeight: '100vh',
				maxHeight: '100vh',
				paddingTop: '10x',
				paddingBottom: '15px',
				borderRight: '1px solid rgba(223, 223, 223, 0.5)',
				boxShadow: '0 2px 24px rgba(214, 203, 252, 0.3)',
				left: '0px',
				top: '2px',
				position: 'fixed',
				boxSizing: 'border-box',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
			}}
		>
			<StyledBox>
				<StyledBox
					css={{
						width: '100%',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						margin: '20px 0 110px 0',
					}}
				>
					<LogoIcon />
				</StyledBox>
				{navbarList.map((item, index) => (
					<NavItem
						key={index}
						icon={item.icon}
						pathName={item.path}
						title={item.name}
						state={item.path.find((path) =>
							location.pathname.includes(path),
						)}
					/>
				))}
			</StyledBox>

			<StyledBox>
				<StyledBox
					id={'medic-tooltip-name'}
					css={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						width: '100%',
						marginBottom: '20px',
						cursor: 'default',
					}}
					data-tip
					data-for={'medic-tooltip-name'}
				>
					{getProfileImageFromName(
						CapitalizeText(localStorage.getItem('medicName')),
						CapitalizeText(localStorage.getItem('medicSurname')),
						{ width: 32, height: 32, fontSize: '12px' },
					)}
					<ReactTooltip
						id={'medic-tooltip-name'}
						place="top"
						effect="solid"
					>
						{`${CapitalizeText(
							localStorage.getItem('medicName'),
						)} ${CapitalizeText(localStorage.getItem('medicSurname'))}`}
					</ReactTooltip>
				</StyledBox>

				{navbarListBottom.map((item, index) => (
					<NavItem
						key={index}
						icon={item.icon}
						pathName={item.path}
						title={item.name}
						state={location.pathname === item.path}
						onClick={handleLogout}
					/>
				))}
			</StyledBox>
		</StyledBox>
	);
};
export default Navbar;
