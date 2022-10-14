import React from 'react';
import { StyledBox } from '../../../common/styledCommonComponents';
import { NavLink } from 'react-router-dom';
import { useTheme } from 'styled-components';

const NavItem = ({ icon, title, pathName, state }) => {
	const theme = useTheme();
	const color = state ? theme.oncoNavbarSelection : theme.white;
	return (
		<StyledBox
			css={{
				height: '40px',
				width: '70px',
				textAlign: 'center',
				backgroundColor: color,
				display: 'flex',
				left: '0px',
				position: 'relative',
				alignItems: 'center',
				justifyContent: 'center',
				boxSizing: 'border-box',
				marginBottom: '4px',
			}}
		>
			<NavLink to={pathName}>
				<StyledBox>{icon && icon(state)}</StyledBox>
			</NavLink>

			{state && (
				<StyledBox
					css={{
						position: 'absolute',
						width: '4px',
						height: '34.96px',
						top: '2px',
						right: '0px',
						background: '#AF7EFF',
						borderRadius: '10px 0px 0px 10px',
					}}
				/>
			)}
		</StyledBox>
	);
};

export default NavItem;
