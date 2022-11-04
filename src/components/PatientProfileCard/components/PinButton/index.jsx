import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useTheme } from 'styled-components';
import PurplePinIcon from '../../../../assets/PurplePinIcon';
import { StyledBox, StyledP } from '../../../../common/styledCommonComponents';
import {
	useLazyGetPatientDataQuery,
	useUpdateFixedPatientMutation,
} from '../../../../redux/api/patientApi';
import { StyledCircularProgress } from '../../../CustomCircularProgress/styles';

const PinButton = ({ fixed = false, color, textColor, border, isLoading }) => {
	const theme = useTheme();
	const { patientId } = useParams();

	const [refetchPatientData, { data: dataPatient }] =
		useLazyGetPatientDataQuery();

	const [fetch, { data, isSuccess }] = useUpdateFixedPatientMutation();

	const handleClick = () => {
		console.log('click');
		fetch({ userId: patientId, fixed: !fixed });
	};

	useEffect(() => {
		refetchPatientData(patientId);
	}, [isSuccess]);

	return (
		<StyledBox
			onClick={() => handleClick()}
			css={{
				boxSizing: 'border-box',
				width: '197px',
				height: '39px',
				background: fixed ? textColor : color,
				border: fixed ? 'none' : border,
				boxShadow: '0px 4px 24px rgba(214, 203, 252, 0.15)',
				borderRadius: '15px',
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'center',
				alignItems: 'center',
				columnGap: '10px',
				cursor: 'pointer',
			}}
		>
			<StyledBox
				css={{
					display: 'flex',
					flexDirection: 'row',
					columnGap: '10px',
					alignItems: 'center',
				}}
			>
				{isLoading ? (
					<StyledCircularProgress size={20} />
				) : (
					<>
						<StyledBox css={{ marginTop: '4px', alignItems: 'center' }}>
							<PurplePinIcon color={fixed ? color : textColor} />
						</StyledBox>
						<StyledP
							css={{
								color: fixed ? color : textColor,
								fontStyle: 'normal',
								fontWeight: 600,
								fontSize: '14px',
								lineHeight: '17px',
								alignItems: 'center',
							}}
						>
							{fixed ? 'Fijado' : 'Fijar'}
						</StyledP>
					</>
				)}
			</StyledBox>
		</StyledBox>
	);
};

export default PinButton;
