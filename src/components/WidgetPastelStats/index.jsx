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
				justifyContent: 'space-between',
			}}
		>
			<PatientsInTreatments patientsInTreatment={50} totalPatients={70} />
			<DonutChart cancerTypes={['100', '23', '33']} />
		</StyledBox>
	);
};

export default WidgetPastelStats;
