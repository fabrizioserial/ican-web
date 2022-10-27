import React, { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import {
	getProfileImageFromName,
	ProfileConfigButton,
} from '../../utils/utils';
import {
	StyledBox,
	StyledCardHome,
	StyledH3,
	StyledImg,
} from '../../common/styledCommonComponents';
import ProfileDetailText from '../../pages/PatientProfile/components/ProfileText';
import ProfileButton from '../../pages/PatientProfile/components/ProfileButtons';

const PatientProfileCard = ({ profileData }) => {
	const theme = useTheme();
	const [age, setAge] = useState(new Date())
	const [birthday, setBirthday] = useState()
	const [gender, setGender] = useState()
	const [status, setStatus] = useState()
	const [buttonList, setButtonList] = useState(ProfileConfigButton);

	const genderValue = (sex) => {
		switch (sex) {
			case 'Masculine':
				return 'Masculino'
			case 'Femenine':
				return 'Femenino'
			default:
				break;
		}
	}

	const statusValue = (state) => {
		switch (state) {
			case 'Accepted':
				return 'Aceptado'
			default:
				break;
		}
	}

	useEffect(() => {
		setBirthday(new Date(profileData?.birthDate).getTime())
		setGender(genderValue(profileData?.sex))
		setStatus(statusValue(profileData?.status))
	}, [profileData])

	useEffect(() => {
		let aux = Date.now() - birthday
		setAge(new Date(aux).getFullYear() - 1970)
	}, [birthday])

	return (
		<StyledBox>
			<StyledCardHome
				css={{
					// width: '1002px',
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
				<StyledBox
					css={{
						display: 'flex',
						columnGap: '300px',
						flexDirection: 'row',
						width: '100%',
						justifyContent: "space-between"
					}}
				>
					<StyledBox
						css={{
							display: 'flex',
							flexDirection: 'row',
							columnGap: '20px',
						}}
					>
						<StyledBox
							css={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'top',
							}}
						>
							{getProfileImageFromName('Agustin', 'Von Staweski', {
								width: 80,
								height: 80,
								fontSize: '25px',
							})}
						</StyledBox>
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
							<StyledBox css={{
								width: "100%"
							}}>
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
									}}
								>
									{profileData?.name + " " + profileData?.surname}
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
									<ProfileDetailText text={gender} />
									<ProfileDetailText text={profileData?.phoneNumber} />
									<ProfileDetailText text={status} />
								</StyledBox>
							</StyledBox>
						</StyledBox>
					</StyledBox>

					<StyledBox
						css={{
							display: "flex",
							justifyContent: 'flex-end'
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
								<ProfileButton
									text={item.text}
									icon={item.icon}
									color={item.color}
									textColor={item.textColor}
									key={index}
								/>
							))}
						</StyledBox>
					</StyledBox>
				</StyledBox>
			</StyledCardHome>
		</StyledBox>
	);
};

export default PatientProfileCard;
