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
	const sortColumn = () => {};

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
						sortDirection={'asc'}
						key={'header-' + index}
						style={{
							paddingLeft: index === 0 ? '30px' : 'auto',
							paddingRight:
								index === PatientListHeaderConst.length
									? '30px'
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
							direction={'asc'}
							onClick={() => sortColumn(headerItem.sortId)}
							IconComponent={() => <ArrowOrderIcon />}
						>
							{headerItem.label}
							<Box component="span" sx={visuallyHidden}>
								{'sorted ascending'}
							</Box>
						</StyledBox>
					</StyledBox>
				))}
			</StyledTableHeader>
			{}
		</TableHead>
	);
};

export default PatientListHeader;
