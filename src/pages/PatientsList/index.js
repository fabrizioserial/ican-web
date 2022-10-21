import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import {
	StyledBox,
	StyledH3,
	StyledHr,
	StyledP,
	StyledPatientsListCard,
	StyledScreen,
} from '../../common/styledCommonComponents';
import NavItem from '../../components/Navbar/NavItem';
import PatientsHeaderCard from './HeaderCard';
import {
	NavbarConfigBottom,
	PatientsListHeaderConfig,
} from '../../utils/utils';
import WaitingListHeaderCard from './WaitingListCard';

function PatientsListScreen() {
	const theme = useTheme();
	const [headerCards, setHeaderCards] = useState(PatientsListHeaderConfig);
	return (
		<StyledScreen>
			<StyledBox
				css={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'top,',
					width: 'inherit',
				}}
			>
				<StyledH3 css={{ marginLeft: '46px', boxSizing: 'border-box' }}>
					Mis Pacientes
				</StyledH3>
				<StyledBox
					css={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'top,',
						marginLeft: '46px',
						marginRight: '46px',
						boxSizing: 'border-box',
						width: '90%',
						height: '16px',
						borderBottom: '1px solid #E1D1FC',
					}}
				/>
				<StyledBox
					css={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'top,',
						columnGap: '42px',
						padding: '35px 46px',
						maxWidth: 'calc(100vw - 70px)',
						flexWrap: 'wrap',
						rowGap: '30px',
					}}
				>
					<WaitingListHeaderCard />
					{headerCards.map((item, index) => (
						<PatientsHeaderCard
							key={index}
							text={item.text}
							number={item.number}
							positive={item.positive}
							pillText={item.pillText}
						/>
					))}
				</StyledBox>
			</StyledBox>
		</StyledScreen>
	);
}

export default PatientsListScreen;
