import styled from 'styled-components';
import { StyledBox, StyledP } from '../../../common/styledCommonComponents';
import { TableCell, TableRow } from '@material-ui/core';

export const StyledBodyRow = styled(TableRow)`
	height: 65px;
	font-size: 11px !important;
	cursor: pointer;
	width: 100%;

	&:hover {
		background-color: #f6f6f6;
	}
`;

export const StyledBodyCell = styled(TableCell)`
	border-bottom-color: rgba(225, 209, 252, 0.22) !important;
	background-color: white;
	font-size: 12px !important;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow-y: hidden;
	color: #5f5f5f;
	box-sizing: border-box;
	max-width: ${(props) => props.width} !important;
	min-width: ${(props) => props.width} !important;
	width: ${(props) => props.width} !important;
`;

export const StyledCellP = styled(StyledP)`
	width: 73px;
	height: 13px;
	font-style: normal;
	font-weight: 400;
	font-size: 11px;
	line-height: 13px;
	display: flex;
	align-items: center;
	color: #5f5f5f;
`;
