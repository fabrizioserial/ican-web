import React from 'react';
import { StyledBox } from '../../../../../common/styledCommonComponents';
import { useTheme } from 'styled-components';
import CloseIcon from '../../../../../assets/CloseIcon';

const Modal = ({ header, body, onClose }) => {
	const theme = useTheme();
	return (
		<StyledBox
			css={{
				position: 'absolute',
				display: 'flex',
				flexDirection: 'column',
				width: '850px',
				zIndex: 11,
				backgroundColor: 'white',
				borderRadius: '20px',
				maxHeight: '90vh',
				overflowY: 'hidden',
			}}
		>
			<StyledBox
				css={{
					display: 'flex',
					flexDirection: 'row-reverse',
					justifyContent: 'space-between',
					borderBottom: '1px solid #B9B9B9',
					minHeight: '90px',
					alignItems: 'center',
					padding: '0 35px',
				}}
			>
				<StyledBox onClick={onClose} css={{ cursor: 'pointer' }}>
					<CloseIcon />
				</StyledBox>
				{header}
			</StyledBox>
			<StyledBox
				css={{ overflow: 'scroll', maxHeight: 'calc(90vw - 90px)' }}
			>
				{body}
			</StyledBox>
		</StyledBox>
	);
};

export default Modal;
