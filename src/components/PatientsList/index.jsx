import React, { useEffect } from 'react';
import { useTheme } from 'styled-components';
import {
	StyledBox,
	StyledCardHome,
	StyledP,
} from '../../common/styledCommonComponents';
import PatientContainer from './PatientContainer';
import { StyledButtonMore } from './PatientContainer/styles';
import { StyledCircularProgress } from '../CustomCircularProgress/styles';
import {
	useGetFixedPatientsQuery,
	usePatientsListQuery,
} from '../../redux/api/listApi';

const PatientsList = () => {
	const theme = useTheme();
	const { data, isLoading } = usePatientsListQuery({ skip: 0, take: 9 });

	// const { data, isLoading, isSuccess } = useGetFixedPatientsQuery();

	console.log(data);

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
					Mis pacientes fijados
				</StyledP>
			</StyledBox>

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
									.filter((user) => user.fixed === true)
									?.slice(0, 9)
									.map((patient, index) => (
										<PatientContainer
											key={index}
											name={patient.name}
											surename={patient.surname}
											cancerType={patient.organ}
											patientId={patient.id}
										/>
									))
							: data?.patients
									.filter((user) => user.fixed === true)
									?.slice(0, 8)
									.map((patient, index) => (
										<PatientContainer
											key={index}
											name={patient.name}
											surename={patient.surname}
											cancerType={patient.organ}
											patientId={patient.id}
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
