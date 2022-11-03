import React from 'react';
import { TableCell, TableRow } from '@material-ui/core';
import { StyledBox } from '../../../common/styledCommonComponents';
import ArrowLeftIcon from '../../../assets/ArrowLeftIcon';
import ArrowRightIcon from '../../../assets/ArrowRightIcon';
import { useDispatch, useSelector } from 'react-redux';
import {
	useLazyOrderPatientsQuery,
	useLazyPatientsListWithParamsQuery,
} from '../../../redux/api/listApi';
import { EndpointsListType } from '../../../utils/utils';

const PatientListBottom = () => {
	const { maxPage, page, lastCalled, lastParams } = useSelector(
		(state) => state.listSlice,
	);
	const dispatch = useDispatch();
	const [refetchSearch, _] = useLazyPatientsListWithParamsQuery();
	const [refetchOrder, _1] = useLazyOrderPatientsQuery();

	const fetchToExecute = (params) => {
		switch (lastCalled) {
			case EndpointsListType.ORDEN:
				return refetchOrder(params);
			case EndpointsListType.FILTER:
				return refetchSearch(params);
		}
	};

	const handleMoveToNextPage = () => {
		fetchToExecute({
			...lastParams,
			params: {
				...lastParams.params,
				take: lastParams.params.take,
				skip: lastParams.params.take * page,
			},
		});
	};
	const handleMoveToPreviousPage = () => {
		fetchToExecute({
			...lastParams,
			params: {
				...lastParams.params,
				take: lastParams.params.take,
				skip: lastParams.params.take * (page - 2),
			},
		});
	};
	return (
		<StyledBox
			css={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-between',
				padding: '20px',
				borderRadius: '0 0 15px 15px',
				boxSizing: 'border-box',
				backgroundColor: 'white',
				alignItems: 'center',
				height: '68px',
			}}
		>
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
					opacity: page > 1 && maxPage > 1 ? 1 : 0,
					pointerEvents: !(page > 1 && maxPage > 1) ? 'none' : 'auto',
				}}
				onClick={handleMoveToPreviousPage}
				className={'withBoxShadow'}
			>
				<ArrowLeftIcon />
			</StyledBox>
			{maxPage && (
				<StyledBox css={{ fontSize: '11px' }}>
					Pagina {page} de {maxPage}
				</StyledBox>
			)}
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
					opacity: page !== maxPage && maxPage > 1 ? 1 : 0,
					pointerEvents: !(page !== maxPage && maxPage > 1)
						? 'none'
						: 'auto',
				}}
				onClick={handleMoveToNextPage}
				className={'withBoxShadow'}
			>
				<ArrowRightIcon />
			</StyledBox>
		</StyledBox>
	);
};

export default PatientListBottom;
