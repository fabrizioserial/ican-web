import React, { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import { StyledBox, StyledP } from '../../../../common/styledCommonComponents';
import {
	ModalTypeEnum,
	ProfileConfigButtonType,
} from '../../../../utils/utils';
import { useNavigate, useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { setModalOpen } from '../../../../redux/slices/utilsSlice';

const ProfileButton = ({ icon, color, text, textColor, type, border }) => {
	const { patientId } = useParams();
	const dispatch = useDispatch();
	const navigation = useNavigate();
	const handleAction = (type) => {
		switch (type) {
			case ProfileConfigButtonType.FORM:
				navigation(`/validate-patient/${patientId}`);
				break;
			case ProfileConfigButtonType.CONTACT:
				dispatch(
					setModalOpen({
						open: true,
						type: ModalTypeEnum.CONTACT_MODAL,
						id: patientId,
					}),
				);
				break;
			default:
				break;
		}
	};

	return (
		<StyledBox
			onClick={() => handleAction(type)}
			css={{
				boxSizing: 'border-box',
				width: '197px',
				height: '39px',
				background: color,
				border: border,
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
				<StyledBox css={{ marginTop: '4px', alignItems: 'center' }}>
					{' '}
					{icon}
				</StyledBox>
				<StyledP
					css={{
						marginLeft: '9px',
						color: textColor,
						fontStyle: 'normal',
						fontWeight: 600,
						fontSize: '14px',
						lineHeight: '17px',
						alignItems: 'center',
					}}
				>
					{text}
				</StyledP>
			</StyledBox>
		</StyledBox>
	);
};

export default ProfileButton;
