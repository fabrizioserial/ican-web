import React from 'react'
import { StyledBox } from "../../common/styledCommonComponents";
import PatientsList from '../../componenets/PatientsList';
import WidgetHome from "../../componenets/WidgetHome";
import PatientsInTreatments from './components/PatientsInTreatments';

function HomeScreen() {
	return (
		<StyledBox
			css={{
				display: 'flex',
				width: '100vw',
				minHeight: '100vh',
				boxSizing:'border-box'
			}}
		>
			<StyledBox
				css={{
					display: 'flex',
					flexDirection: 'row',
					margin: '30px 60px',
					height: 'inherit',
					width: 'inherit',
					justifyContent: 'space-between',
				}}
			>
				<StyledBox
					css={{
						display: 'flex',
						flexDirection: 'column',
						flex: 0.6,
						maxWidth: '760px',
					}}
				>
					<WidgetHome />
				</StyledBox>
				<StyledBox
					css={{ display: 'flex', flex: 0.4, justifyContent: 'flex-end' }}
				>
					<PatientsList />
				</StyledBox>

				<PatientsInTreatments patientsInTreatment={50} totalPatients={70} />

			</StyledBox>
		</StyledBox>
	);
}

export default HomeScreen;
