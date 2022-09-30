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
				width: '70px' ,
				zIndex: 1 ,
				backgroundColor: theme.white ,
				overflowX: 'hidden',
				minHeight:'100vh',
				paddingTop: '125px',
				borderRight: '1px solid rgba(223, 223, 223, 0.5)',
				boxShadow: '0 2px 24px rgba(214, 203, 252, 0.3)',
				left: "0px",
				top: "2px",
				position: "absolute",
				boxSizing: "border-box",

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
