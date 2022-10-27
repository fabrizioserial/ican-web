import WaitingListHeaderCard from './WaitingListCard';
import PatientsHeaderCard from './HeaderCard';
import {
	StyledBox,
	StyledPatientsListCard,
} from '../../../common/styledCommonComponents';
import React, { useEffect, useState } from 'react';
import { PatientsListHeaderConfig } from '../../../utils/utils';
import { usePatientsReportQuery } from '../../../redux/api/homeApi';
import { StyledCircularProgress } from '../../../components/CustomCircularProgress/styles';

const CardsHeader = () => {
	const [headerCards, setHeaderCards] = useState(['', '', '', '']);

	const { data, isLoading } = usePatientsReportQuery();

	useEffect(() => {
		data &&
			setHeaderCards([
				<WaitingListHeaderCard />,
				{
					text: 'Pacientes Activos',
					number: data?.active,
					// positive: false,
					// pillText: '-2',
					// pillDetail: '4 pacientes que se volvieron inactivos',
				},
				{
					text: 'Pacientes Totales',
					number: data?.total,
					// positive: true,
					// pillText: '+4',
					// pillDetail: '4 nuevos pacientes',
				},
				{
					text: 'Pacientes en Tratamiento',
					number: data?.inTreatment,
					// positive: true,
					// pillText: '+4',
					// pillDetail: '4 nuevos pacientes en tratamiento ',
				},
			]);
	}, [data]);
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
			{isLoading
				? headerCards.map((item) => (
						<StyledPatientsListCard
							css={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								padding: '22px 24px',
								flexDirection: 'row',
								flex: 1,
							}}
						>
							<StyledCircularProgress />
						</StyledPatientsListCard>
				  ))
				: headerCards.map((item, index) =>
						item?.text ? (
							<PatientsHeaderCard
								key={index}
								text={item.text}
								number={item.number}
								positive={item.positive}
								pillText={item.pillText}
								pillDetail={item.pillDetail}
							/>
						) : (
							item
						),
				  )}
		</StyledBox>
	);
};

export default CardsHeader;
