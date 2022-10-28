import {Box, TableCell, TableHead, TableRow, TableSortLabel} from "@material-ui/core";
import {PollResultsHeaderConst} from "../../../utils/utils";
import {StyledBox, StyledP} from "../../../common/styledCommonComponents";
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
                <StyledBox as={TableCell}/>
                <StyledBox as={TableCell}>

                        <StyledP css={{
                            width: "108px",
                            height: "13px",
                            fontStyle: "normal",
                            fontWeight: 500,
                            fontSize: "11px",
                            lineHeight: "13px",
                            display: "flex",
                            alignItems: "center",
                            color: "#9357F7",
                        }}> Fecha de realización</StyledP>

                    </StyledBox>
                <StyledBox as={TableCell}>
                    <StyledP   css={{
                        width: "37px",
                        height: "13px",
                        left: "1352px",
                        top: "166px",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "11px",
                        lineHeight: "13px",
                        display: "flex",
                        alignItems: "center",
                        paddingLeft:"40px",
                        color: "#9357F7",
                    }}>Estado</StyledP>
                </StyledBox>

            </StyledTableHeader>

        </TableHead>
    );
};

export default PollResultsHeader;