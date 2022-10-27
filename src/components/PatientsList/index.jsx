import React from 'react';
import { useTheme } from 'styled-components';
import {
	StyledBox,
	StyledCardHome,
	StyledP,
} from '../../common/styledCommonComponents';
import PatientContainer from './PatientContainer';
import { StyledButtonMore } from './PatientContainer/styles';
import { usePatientsListQuery } from '../../redux/api/homeApi';
import { StyledCircularProgress } from '../CustomCircularProgress/styles';

const PatientsList = () => {
	const theme = useTheme();
	const { data, isLoading } = usePatientsListQuery();
	return (
		<StyledCardHome
			css={{
				maxHeight: '891px',
				width: '380px',
				color: theme.oncoBlack,
				padding: '24px 20px',
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
                {data?.patients?.map((patient, index) => (
                    <PatientContainer key={index} name={patient.name} surename={patient.surname} cancerType={patient.cancerType} />
                ))}
                <StyledButtonMore
                    onClick={() => console.log("asd")}
                >
                    Ver más
                </StyledButtonMore>
            </StyledBox> */}

			{isLoading ? (
				<StyledBox
					css={{
						width: '100%',
						height: '100%',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<StyledCircularProgress />
				</StyledBox>
			) : (
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
						{data?.patients?.length < 10
							? data?.patients
									?.slice(0, 9)
									.map((patient, index) => (
										<PatientContainer
											key={index}
											name={patient.name}
											surename={patient.surname}
											cancerType={patient.organ}
										/>
									))
							: data?.patients
									?.slice(0, 8)
									.map((patient, index) => (
										<PatientContainer
											key={index}
											name={patient.name}
											surename={patient.surname}
											cancerType={patient.organ}
										/>
									))}
					</StyledBox>
					{data?.patients?.length > 9 && (
						<StyledButtonMore onClick={() => console.log('asd')}>
							Ver más
						</StyledButtonMore>
					)}
				</StyledBox>
			)}
		</StyledCardHome>
	);
};

export default PatientsList;
