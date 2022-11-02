import React from 'react';
import { TableCell, TableRow } from '@material-ui/core';
import { StyledBox } from '../../../common/styledCommonComponents';
import ArrowLeftIcon from '../../../assets/ArrowLeftIcon';
import ArrowRightIcon from '../../../assets/ArrowRightIcon';
import { useSelector } from 'react-redux';

const PatientListBottom = () => {
	const { maxPage, page } = useSelector((state) => state.listSlice);
	const handleMoveToNextPage = () => {};
	const handleMoveToPreviousPage = () => {};
	return (
		<StyledBox
			css={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent:
					maxPage !== 1 && maxPage !== undefined
						? 'space-between'
						: 'center',
				padding: '20px',
				borderRadius: '0 0 15px 15px',
				boxSizing: 'border-box',
				backgroundColor: 'white',
				alignItems: 'center',
				height: '68px',
			}}
		>
			{page > 1 && maxPage > 1 && (
				<StyledBox
					css={{
						width: '76px',
						height: '34px',
						borderRadius: '15px',
						border: '1px solid rgba(225, 209, 252, 0.22)',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						cursor: 'pointer',
					}}
					onClick={handleMoveToPreviousPage}
					className={'withBoxShadow'}
				>
					<ArrowLeftIcon />
				</StyledBox>
			)}
			{maxPage && (
				<StyledBox css={{ fontSize: '11px' }}>
					Pagina {page} de {maxPage}
				</StyledBox>
			)}
			{page !== maxPage && maxPage > 1 && (
				<StyledBox
					css={{
						width: '76px',
						height: '34px',
						borderRadius: '15px',
						border: '1px solid rgba(225, 209, 252, 0.22)',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						cursor: 'pointer',
					}}
					onClick={handleMoveToNextPage}
					className={'withBoxShadow'}
				>
					<ArrowRightIcon />
				</StyledBox>
			)}
		</StyledBox>
	);
};

export default PatientListBottom;
