import React from 'react';
import { StyledBox } from '../../common/styledCommonComponents';
import PatientsInTreatments from '../../pages/Home/components/PatientsInTreatments';
import DonutChart from '../DonutWidget/index';

const WidgetPastelStats = () => {
	return (
		<StyledBox
			css={{
				width: 'inherit',
				height: '300px',
				display: 'flex',
				flexDirection: 'row',
				marginBottom: '35px',
				justifyContent: 'space-between',
			}}
		>
			<PatientsInTreatments patientsInTreatment={50} totalPatients={70} />
			<DonutChart />
		</StyledBox>
	);
};

export default WidgetPastelStats;
