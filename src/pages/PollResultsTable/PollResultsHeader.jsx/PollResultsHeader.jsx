import {Box, TableCell, TableHead, TableRow, TableSortLabel} from "@material-ui/core";
import {PollResultsHeaderConst} from "../../../utils/utils";
import {StyledBox} from "../../../common/styledCommonComponents";
import ArrowOrderIcon from "../../../assets/ArrowOrderIcon";
import {visuallyHidden} from "@mui/utils";
import React from "react";
import styled from "styled-components";



const PollResultsHeader = () => {
    const sortColumn = () => {};

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
    return (
        <TableHead>
            <StyledTableHeader>

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
            index === PollResultsHeaderConst.length
                ? '30px'
                : 'auto',
    }}
    />


            </StyledTableHeader>
            {}
        </TableHead>
    );
};

export default PollResultsHeader;