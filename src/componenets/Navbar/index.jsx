import React, { useEffect, useState } from 'react';
import { StyledBox } from '../../common/styledCommonComponents';
import NavItem from './NavItem';
import HomeIcon from '../../assets/HomeIcon';
import PatientsListIcon from '../../assets/PatientsListIcon';
import StatisticsIcon from '../../assets/StatisticsIcon';
import { useLocation } from 'react-router';
import { NavbarConfig } from '../../utils/utils';
import { useTheme } from 'styled-components';

const Navbar = () => {
	let location = useLocation();
	const [navbarList, setNavbarList] = useState(NavbarConfig);
	 const theme=useTheme()

	return (
		<StyledBox
			css={{
				position:
					'fixed' /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */,
				height: '980px',
				width: '70px' /* Set the width of the sidebar */,
				zIndex: 1 /* Stay on top of everything */,
				backgroundColor: theme.white /* Black */,
				overflowX: 'hidden' /* Disable horizontal scroll */,
				paddingTop: '10px',
			}}
		>
			{navbarList.map((item, index) => (
				<NavItem
					key={index}
					icon={item.icon}
					pathName={item.path}
					title={item.name}
					state={location.pathname===item.path}
				/>
			))}
		</StyledBox>
	);
};
export default Navbar;
