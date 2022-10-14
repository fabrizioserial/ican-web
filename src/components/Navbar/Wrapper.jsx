import React from 'react';
import Navbar from './index';
import { StyledBox } from '../../common/styledCommonComponents';
import { Outlet } from 'react-router';

const Wrapper = () => {
	return (
		<StyledBox css={{ flexDirection: 'row', display: 'flex' }}>
			<Navbar />
			<StyledBox css={{ paddingLeft: '70px' }}>
				<Outlet />
			</StyledBox>
		</StyledBox>
	);
};

export default Wrapper;
