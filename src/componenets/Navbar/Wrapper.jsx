import React from 'react';
import Navbar from './index';
import { StyledBox, StyledScreen } from '../../common/styledCommonComponents';
import { Outlet } from 'react-router';

const Wrapper = () => {
	return (
		<StyledBox css={{ display: 'flex', flexDirection: 'row', width: "100vw"  }}>
			<Navbar />
			<StyledScreen>
				<Outlet />
			</StyledScreen>
		</StyledBox>
	);
};

export default Wrapper;
