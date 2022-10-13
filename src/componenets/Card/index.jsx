import {
	CardHomeStyled,
	TreatmentsTitleBox,
} from '../../pages/Home/components/StyledHomeScreen';
import {
	StyledBox,
	StyledCardHome,
	StyledH3,
} from '../../common/styledCommonComponents';
import HungryIcon from '../../assets/HungryIcon';
import Chart from 'react-apexcharts';
import React from 'react';
import { useTheme } from 'styled-components';

const Card = ({ icon, title, children, width, height }) => {
	const theme = useTheme();
	return (
		<StyledCardHome
			lineColor={theme.itemBackground}
			css={{
				width: `${width}px !important`,
				height: `${height}px !important`,
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<StyledBox
				css={{
					display: 'flex',
					flexDirection: 'row',
					height: '50px',
					paddingTop: 0,
					alignItems: 'center',
					paddingLeft: 25,
				}}
			>
				{icon}
				<StyledH3
					css={{
						color: theme.OncoPurple,
						margin: '0 0 0 10px',
						textAlign: 'left',
						fontSize: '1rem',
						fontWeight: 'normal',
					}}
				>
					{title}
				</StyledH3>
			</StyledBox>
			<StyledBox
				css={{
					width: '100%',
					height: 'inherit',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					borderTop: '1px solid #F0EDED',
					flex: 1,
				}}
			>
				{children}
			</StyledBox>
		</StyledCardHome>
	);
};

export default Card;
