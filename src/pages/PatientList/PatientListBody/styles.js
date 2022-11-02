import styled from 'styled-components';
import { StyledBox } from '../../../common/styledCommonComponents';
import { TableCell, TableRow } from '@material-ui/core';

export const StyledBodyRow = styled(TableRow)`
	height: 65px;
	font-size: 11px !important;
	cursor: pointer;

	&:hover {
		background-color: #f6f6f6;
	}
`;

export const StyledBodyCell = styled(TableCell)`
	border-bottom-color: rgba(225, 209, 252, 0.22) !important;
	background-color: white;
	font-size: 12px !important;
`;
