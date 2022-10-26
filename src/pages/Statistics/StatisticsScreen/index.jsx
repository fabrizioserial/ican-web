import React from 'react';
import {
	StyledBox,
	StyledH3,
	StyledScreen,
} from '../../../common/styledCommonComponents';

const StatisticsScreen = () => {
	return (
		<StyledScreen
			css={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			<StyledBox
				css={{
					display: 'flex',
					flexDirection: 'column',
					margin: '20px',
					padding: '20px 40px',
					width: '100%',
					boxSizing: 'border-box',
				}}
			>
				<StyledH3>Estadisticas</StyledH3>
				<StyledBox
					css={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'top,',
						boxSizing: 'border-box',
						width: '100%',
						height: '16px',
						borderBottom: '1px solid #E1D1FC',
					}}
				/>
			</StyledBox>
		</StyledScreen>
	);
};

export default StatisticsScreen;
