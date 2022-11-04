import React, { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import {
	getProfileImageFromName,
	ProfileConfigButton,
	ProfileConfigButtonType
} from '../../utils/utils';
import {
	StyledBox,
	StyledCardHome,
	StyledH3,
	StyledImg,
} from '../../common/styledCommonComponents';
import ProfileDetailText from '../../pages/PatientProfile/components/ProfileText';
import ProfileButton from '../../pages/PatientProfile/components/ProfileButtons';
import { useParams } from 'react-router';
import { useLazyGetPatientDataQuery } from '../../redux/api/patientApi';
import { StyledCircularProgress } from '../CustomCircularProgress/styles';
import PinButton from './components/PinButton';

const PatientProfileCard = () => {
	const theme = useTheme();
	const [age, setAge] = useState(new Date());
	const [birthday, setBirthday] = useState();
	const [buttonList] = useState(ProfileConfigButton);
	const { patientId } = useParams();
	const [refetchPatientData, { data: dataPatient, isSuccess, isLoading }] =
		useLazyGetPatientDataQuery();

	const genderValue = (sex) => {
		switch (sex) {
			case 'Masculine':
				return 'Masculino';
			case 'Femenine':
				return 'Femenino';
			default:
				break;
		}
	};

	const statusValue = (state) => {
		switch (state) {
			case 'Accepted':
				return 'Aceptado';
			default:
				break;
		}
	};

	useEffect(() => {
		refetchPatientData(patientId);
	}, [patientId]);

	useEffect(() => {
		setBirthday(new Date(dataPatient?.birthDate).getTime());
	}, [dataPatient]);

	useEffect(() => {
		let aux = Date.now() - birthday;
		setAge(new Date(aux).getFullYear() - 1970);
	}, [birthday]);

	return (
		<StyledBox css={{ maxWidth: '948px' }}>
			<StyledCardHome
				css={{
					width: '100%',
					height: '193px',
					background: theme.white,
					borderRadius: '20px',
					display: 'flex',
					flexDirection: 'row',
					paddingTop: '26px',
					paddingBottom: '26px',
					paddingLeft: '35px',
					paddingRight: '35px',
					boxSizing: 'border-box',
				}}
			>
				{isLoading ? (
					<StyledBox
						css={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							height: '100%',
							width: '100%',
						}}
					>
						<StyledCircularProgress />
					</StyledBox>
				) : (
					<StyledBox
						css={{
							display: 'flex',
							columnGap: '300px',
							flexDirection: 'row',
							width: '100%',
							justifyContent: 'space-between',
						}}
					>
						<StyledBox
							css={{
								display: 'flex',
								flexDirection: 'row',
								columnGap: '20px',
							}}
						>
							{dataPatient && (
								<StyledBox
									css={{
										display: 'flex',
										flexDirection: 'column',
										alignItems: 'top',
									}}
								>
									{getProfileImageFromName(
										dataPatient.name,
										dataPatient.surname,
										{
											width: 80,
											height: 80,
											fontSize: '25px',
										},
									)}
								</StyledBox>
							)}
							<StyledBox
								css={{
									display: 'flex',
									flexDirection: 'row',
									justifyContent: 'flex-start',
									alignSelf: 'top',
									flexWrap: 'wrap',
									rowGap: '10px',
								}}
							>
								<StyledBox
									css={{
										width: '100%',
									}}
								>
									<StyledH3
										css={{
											fontStyle: 'normal',
											fontWeight: 400,
											fontSize: '32px',
											display: 'flex',
											flexDirection: 'row',
											alignItems: 'top',
											justifyContent: 'flex-start',
											alignSelf: 'top',
											margin: 0,
											whiteSpace: 'nowrap',
											color: theme.oncoBlack,
											textTransform: 'capitalize',
										}}
									>
										{dataPatient?.name + ' ' + dataPatient?.surname}
									</StyledH3>
								</StyledBox>

								<StyledBox
									css={{
										display: 'flex',
										flexDirection: 'row',
										alignItems: 'top',
										flexWrap: 'wrap',
										rowGap: '10px',
										columnGap: '15px',
									}}
								>
									<StyledBox
										css={{
											display: 'flex',
											flexDirection: 'column',
											flexWrap: 'wrap',
											rowGap: '12px',
										}}
									>
										<ProfileDetailText text={'Edad:'} />
										<ProfileDetailText text={'Sexo:'} />
										<ProfileDetailText text={'Nro:'} />
										<ProfileDetailText text={'Estado:'} />
									</StyledBox>
									<StyledBox
										css={{
											display: 'flex',
											flexDirection: 'column',
											flexWrap: 'wrap',
											rowGap: '12px',
										}}
									>
										<ProfileDetailText text={age + ' años'} />
										<ProfileDetailText
											text={genderValue(dataPatient?.sex)}
										/>
										<ProfileDetailText
											text={dataPatient?.medicHistoryNumber}
										/>
										<ProfileDetailText
											text={statusValue(dataPatient?.status)}
										/>
									</StyledBox>
								</StyledBox>
							</StyledBox>
						</StyledBox>

						<StyledBox
							css={{
								display: 'flex',
								justifyContent: 'flex-end',
							}}
						>
							<StyledBox
								css={{
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'center',
									alignItems: 'center',
									flexWrap: 'wrap',
									rowGap: '12px',
								}}
							>
								{buttonList.map((item, index) => (

									item.type === ProfileConfigButtonType.PIN ?
										<PinButton
											key={index}
											color={item.color}
											textColor={item.textColor}
											border={item.border}
											type={item.type}
											fixed={dataPatient?.fixed}
										/>
										:
										< ProfileButton
											text={item.text}
											icon={item.icon}
											color={item.color}
											textColor={item.textColor}
											key={index}
											border={item.border}
											type={item.type}
										/>

								))}
							</StyledBox>
						</StyledBox>
					</StyledBox>
				)}
			</StyledCardHome>
		</StyledBox>
	);
};

export default PatientProfileCard;
