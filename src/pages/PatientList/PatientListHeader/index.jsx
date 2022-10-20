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

const StyledTableCellHeader = styled(TableCell)`
	color: #9357f7 !important;

	border-color: #efe8ff;
	height: 65px;
	box-sizing: border-box;
	border-bottom-color: rgba(225, 209, 252, 0.22) !important;
`;

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

const StyledTableSortLabel = styled(TableSortLabel)`
	color: #9357f7 !important;
	font-size: 12px;
`;

const PatientListHeader = () => {
	const sortColumn = () => {};

	return (
		<TableHead>
			<StyledTableHeader>
				{PatientListHeaderConst?.map((headerItem, index) => (
					<StyledTableCellHeader
						sortDirection={'asc'}
						key={'header-' + index}
					>
						<StyledTableSortLabel
							active={true}
							direction={'asc'}
							onClick={() => sortColumn(headerItem.sortId)}
							IconComponent={() => <ArrowOrderIcon />}
						>
							{headerItem.label}
							<Box component="span" sx={visuallyHidden}>
								{'sorted ascending'}
							</Box>
						</StyledTableSortLabel>
					</StyledTableCellHeader>
				))}
			</StyledTableHeader>
			{}
		</TableHead>
	);
};

export default PatientListHeader;
