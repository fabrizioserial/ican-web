import WaitingListHeaderCard from './WaitingListCard';
import PatientsHeaderCard from './HeaderCard';
import { StyledBox } from '../../../common/styledCommonComponents';
import React, { useState } from 'react';
import { PatientsListHeaderConfig } from '../../../utils/utils';

const CardsHeader = () => {
	const [headerCards, setHeaderCards] = useState(PatientsListHeaderConfig);

	return (
		<StyledBox
			css={{
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'top,',
				columnGap: '42px',
				padding: '35px 0',
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
					pillDetail={item.pillDetail}
				/>
			))}
		</StyledBox>
	);
};

export default CardsHeader;
