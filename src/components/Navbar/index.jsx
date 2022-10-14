import React, { useEffect, useState } from 'react';
import { StyledBox } from '../../common/styledCommonComponents';
import NavItem from './NavItem';
import { useLocation } from 'react-router';
import { NavbarConfig, NavbarConfigBottom } from '../../utils/utils';
import { useTheme } from 'styled-components';
import BellIcon from '../../assets/BellIcon';
import SettingsIcon from '../../assets/SettingsIcon';

const Navbar = () => {
	let location = useLocation();
	const [navbarList, setNavbarList] = useState(NavbarConfig);
	const [navbarListBottom, setNavbarListBottom] = useState(NavbarConfigBottom);

	const theme = useTheme();

	return (
		<StyledBox
			css={{
				width: '70px',
				zIndex: 1,
				backgroundColor: theme.white,
				overflowX: 'hidden',
				minHeight: '100vh',
				maxHeight: '100vh',
				paddingTop: '125px',
				borderRight: '1px solid rgba(223, 223, 223, 0.5)',
				boxShadow: '0 2px 24px rgba(214, 203, 252, 0.3)',
				left: '0px',
				top: '2px',
				position: 'absolute',
				boxSizing: 'border-box',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
			}}
		>
			<StyledBox>
				{navbarList.map((item, index) => (
					<NavItem
						key={index}
						icon={item.icon}
						pathName={item.path}
						title={item.name}
						state={location.pathname === item.path}
					/>
				))}
			</StyledBox>

			<StyledBox>
				{navbarListBottom.map((item, index) => (
					<NavItem
						key={index}
						icon={item.icon}
						pathName={item.path}
						title={item.name}
						state={location.pathname === item.path}
					/>
				))}
			</StyledBox>
		</StyledBox>
	);
};
export default Navbar;
