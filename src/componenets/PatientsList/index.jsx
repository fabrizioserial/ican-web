import React from 'react';
import { useTheme } from 'styled-components';
import {
	StyledBox,
	StyledCardHome,
	StyledP,
} from '../../common/styledCommonComponents';
import PatientContainer from './PatientContainer';
import { StyledButtonMore } from './PatientContainer/styles';
import patients from './patients';

const PatientsList = () => {
	const theme = useTheme();
	return (
		<StyledCardHome
			css={{
				minHeight: '100%',
				maxHeight: '100%',
				width: '380px',
				color: theme.oncoBlack,
			}}
		>
			<StyledBox
				css={{
					height: '24px',
					marginBottom: '16px',
				}}
			>
				<StyledP css={{ color: theme.OncoBlack, fontWeight: 500 }}>
					Mis pacientes
				</StyledP>
			</StyledBox>
			{/* <StyledBox css={{
                height: "95%",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justfyContent: "space-between",
                rowGap: "10px"
            }}>
                {patients?.map((patient, index) => (
                    <PatientContainer key={index} fullName={patient.name + " " + patient.surname} legend={patient.cancerType} />
                ))}
                <StyledButtonMore
                    onClick={() => console.log("asd")}
                >
                    Ver más
                </StyledButtonMore>
            </StyledBox> */}
			<StyledBox
				css={{
					height: '95%',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
				}}
			>
				<StyledBox
					css={{
						display: 'flex',
						flexDirection: 'column',
						rowGap: '10px',
					}}
				>
					{patients?.length < 10
						? patients
							?.slice(0, 9)
							.map((patient, index) => (
								<PatientContainer
									key={index}
									fullName={patient.name + " " + patient.surname}
									legend={patient.cancerType}
								/>
							))
						: patients
							?.slice(0, 8)
							.map((patient, index) => (
								<PatientContainer
									key={index}
									fullName={patient.name + " " + patient.surname}
									legend={patient.cancerType}
								/>
							))}
				</StyledBox>
				{patients?.length > 9 && (
					<StyledButtonMore onClick={() => console.log('asd')}>
						Ver más
					</StyledButtonMore>
				)}
			</StyledBox>
		</StyledCardHome>
	);
};

export default PatientsList;
