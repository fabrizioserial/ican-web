import React, {useState} from "react";
import DailyIcon from "../../../assets/DailyIcon";
import WeeklyIcon from "../../../assets/WeeklyIcon";
import {StyledBox} from "../../../common/styledCommonComponents";
import {backgroundColorStatus, textColorStatus} from "../../../utils/utils";
import TableBody from "@material-ui/core/TableBody";
import {StyledBodyCell, StyledBodyRow} from "../../PatientList/PatientListBody/styles";


const PollResultsBody = () => {
    const [body, setBody] = useState([
        {
            date:" 14 de noviembre 2022" ,
            status: 'Completed',
            icon: <DailyIcon/>,

        },
        {
            date:" 14 de noviembre 2022" ,
            status: 'Completed',
            icon: <WeeklyIcon/>,
        },
        {
            date:" 14 de noviembre 2022" ,
            status: 'Completed',
            icon: <DailyIcon/>,
        },
        {
            date:" 14 de noviembre 2022" ,
            status: 'Completed',
            icon:  <WeeklyIcon/>,
        },
        {
            date:" 14 de noviembre 2022" ,
            status: 'Completed',
            icon: <DailyIcon/>,
        },
        {
            date:" 14 de noviembre 2022" ,
            status: 'Completed',
            icon: <WeeklyIcon/>,
        },
        {
            date:" 14 de noviembre 2022" ,
            status: 'Completed',
            icon: <WeeklyIcon/>,
        },
        {
            date:" 14 de noviembre 2022" ,
            status: 'Completed',
            icon:  <DailyIcon/>,
        },
    ]);



    return (
        <TableBody>
            {body.map((bodyItem) => (
                <StyledBodyRow>
                    <StyledBodyCell with={'20%'} style={{ paddingLeft: '30px' }}>
                        {bodyItem.icon}
                    </StyledBodyCell>
                    <StyledBodyCell width={'40%'}>
                        {bodyItem.status}
                    </StyledBodyCell>
                    <StyledBodyCell width={'40%'}>
                        {bodyItem.date}
                    </StyledBodyCell>

                </StyledBodyRow>
            ))}
        </TableBody>
    );
};

export default PollResultsBody;