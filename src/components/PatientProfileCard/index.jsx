import React, { useState } from 'react';
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

const PatientProfileCard = () => {
	const theme = useTheme();
	const [buttonList, setButtonList] = useState(ProfileConfigButton);
	return (
		<StyledBox>
			<StyledCardHome
				css={{
					width: '1002px',
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
								Agustin Von Staweski
							</StyledH3>

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
									<ProfileDetailText text={'52 años'} />
									<ProfileDetailText text={'Masculino'} />
									<ProfileDetailText text={'12353784863'} />
									<ProfileDetailText text={'Activo'} />
								</StyledBox>
							</StyledBox>
						</StyledBox>
					</StyledBox>

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
			</StyledCardHome>
		</StyledBox>
	);
};

export default PatientProfileCard;
