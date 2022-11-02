import React from 'react';
import {
	Box,
	TableCell,
	TableHead,
	TableRow,
	TableSortLabel,
} from '@material-ui/core';
import { visuallyHidden } from '@mui/utils';
import styled from 'styled-components';
import { PatientListHeaderConst } from '../../../utils/utils';
import ArrowOrderIcon from '../../../assets/ArrowOrderIcon';
import { StyledBox } from '../../../common/styledCommonComponents';
import { useLazyOrderPatientsQuery } from '../../../redux/api/listApi';
import { useDispatch, useSelector } from 'react-redux';
import { setColumnState } from '../../../redux/slices/listSlice';

const StyledTableHeader = styled(TableRow)`
	background-color: #f6f2ff;
	.MuiTableCell-root {
		&:first-child {
			border-radius: 15px 0 0 0;
			padding-left: 30px;
		}
		&:last-child {
			border-radius: 0 15px 0 0;
			padding-right: 30px;
		}
	}
`;

const PatientListHeader = () => {
	const [refetch, { data, isLoading }] = useLazyOrderPatientsQuery();
	const dispatch = useDispatch();
	const columnState = useSelector((state) => state.listSlice.columnState);

	const sortColumn = (columnName) => {
		refetch({
			column: columnName,
			params: {
				order: columnState[columnName] === 'desc' ? 'asc' : 'desc',
			},
		});
		dispatch(
			setColumnState({
				columnName: columnName,
				orden: columnState[columnName] === 'desc' ? 'asc' : 'desc',
			}),
		);
	};

	return (
		<TableHead>
			<StyledTableHeader>
				{PatientListHeaderConst?.map((headerItem, index) => (
					<StyledBox
						as={TableCell}
						css={{
							color: '#9357f7 !important',
							borderColor: '#efe8ff',
							height: '65px',
							boxSizing: 'border-box',
							borderBottomColor: 'rgba(225, 209, 252, 0.22) !important',
						}}
						width={headerItem.width}
						sortDirection={columnState[headerItem.sortId]}
						key={'header-' + index}
						style={{
							paddingLeft: index === 0 ? '30px !important' : 'auto',
							paddingRight:
								index === PatientListHeaderConst.length
									? '30px !important'
									: 'auto',
						}}
					>
						<StyledBox
							as={TableSortLabel}
							css={{
								color: ' #9357f7 !important',
								fontSize: '12px',
							}}
							active={true}
							direction={columnState[headerItem.sortId]}
							onClick={() => sortColumn(headerItem.sortId)}
							IconComponent={() =>
								columnState[headerItem?.sortId] ? (
									<ArrowOrderIcon
										css={{
											transform:
												columnState[headerItem.sortId] === 'asc' &&
												'rotate(180deg)',
										}}
									/>
								) : (
									<></>
								)
							}
						>
							{headerItem.label}
							<Box component="span" sx={visuallyHidden}>
								{'sorted ascending'}
							</Box>
						</StyledBox>
					</StyledBox>
				))}
			</StyledTableHeader>
		</TableHead>
	);
};

export default PatientListHeader;
