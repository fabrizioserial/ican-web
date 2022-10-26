import React from 'react';
import PatientsList from '../../components/PatientsList';
import { StyledBox, StyledScreen } from '../../common/styledCommonComponents';
import WidgetHome from '../../components/WidgetHome';
import WidgetPastelStats from '../../components/WidgetPastelStats';
import { ModalTypeEnum } from '../../utils/utils';
import { withModal } from '../../components/HOC/withModal';

function HomeScreen() {
	return (
		<StyledScreen>
			<StyledBox
				css={{
					display: 'flex',
					flexDirection: 'row',
					margin: '30px 60px',
					height: 'inherit',
					width: 'inherit',
					justifyContent: 'center',
				}}
			>
				<StyledBox
					css={{
						display: 'flex',
						flexDirection: 'column',
						flex: 0.6,
						maxWidth: '760px',
						rowGap: '35px',
					}}
				>
					<WidgetHome />
					<WidgetPastelStats />
				</StyledBox>
				<StyledBox css={{ display: 'flex', flex: 0.4, marginLeft: '50px' }}>
					<PatientsList />
				</StyledBox>
			</StyledBox>
		</StyledScreen>
	);
}

export default withModal(HomeScreen, { type: ModalTypeEnum.WEEKLY_MODAL });
