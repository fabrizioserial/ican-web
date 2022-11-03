import React, { useState } from 'react';
import { StyledBox } from '../../common/styledCommonComponents';
import NavItem from './NavItem';
import { useLocation } from 'react-router';
import { NavbarConfig, NavbarConfigBottom } from '../../utils/utils';
import { useTheme } from 'styled-components';
import BellIcon from '../../assets/BellIcon';
import { useDispatch } from 'react-redux';
import { logout } from "../../redux/slices/authSlice"

const Navbar = () => {
	let location = useLocation();
	const [navbarList] = useState(NavbarConfig);
	const [navbarListBottom, setNavbarListBottom] = useState(NavbarConfigBottom);

	const theme = useTheme();
	const dispatch = useDispatch();


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
				position: 'fixed',
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
						state={item.path.find((path) =>
							location.pathname.includes(path),
						)}
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
						onClick={ () => item.path === "/login" && dispatch(logout()) }
					/>
				))}
			</StyledBox>
		</StyledBox>
	);
};
export default Navbar;
