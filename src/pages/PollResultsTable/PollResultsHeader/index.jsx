import {Box, TableCell, TableHead, TableRow, TableSortLabel} from "@material-ui/core";
import {PollResultsHeaderConst} from "../../../utils/utils";
import {StyledBox} from "../../../common/styledCommonComponents";
import ArrowOrderIcon from "../../../assets/ArrowOrderIcon";
import {visuallyHidden} from "@mui/utils";
import React from "react";
import styled from "styled-components";



const PollResultsHeader = () => {


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

    />


            </StyledTableHeader>
            {}
        </TableHead>
    );
};

export default PollResultsHeader;