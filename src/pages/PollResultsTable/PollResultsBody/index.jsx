import React, {useState} from "react";
import DailyIcon from "../../../assets/DailyIcon";
import WeeklyIcon from "../../../assets/WeeklyIcon";
import {StyledBox} from "../../../common/styledCommonComponents";
import {backgroundColorStatus, renderPollPill, renderStatusPill, textColorStatus} from "../../../utils/utils";
import TableBody from "@material-ui/core/TableBody";
import {StyledBodyCell, StyledBodyRow} from "../../PatientList/PatientListBody/styles";


const PollResultsBody = () => {
    const [body, setBody] = useState([
        {
            date:" 14 de noviembre 2022" ,
            status: 'completed',
            icon: <DailyIcon/>,

        },
        {
            date:" 14 de noviembre 2022" ,
            status: 'completed',
            icon: <WeeklyIcon/>,
        },
        {
            date:" 14 de noviembre 2022" ,
            status: 'completed',
            icon: <DailyIcon/>,
        },
        {
            date:" 14 de noviembre 2022" ,
            status: 'completed',
            icon:  <WeeklyIcon/>,
        },
        {
            date:" 14 de noviembre 2022" ,
            status: 'completed',
            icon: <DailyIcon/>,
        },
        {
            date:" 14 de noviembre 2022" ,
            status: 'completed',
            icon: <WeeklyIcon/>,
        },
        {
            date:" 14 de noviembre 2022" ,
            status: 'incomplete',
            icon: <WeeklyIcon/>,
        },
        {
            date:" 14 de noviembre 2022" ,
            status: 'incomplete',
            icon:  <DailyIcon/>,
        },
    ]);



    return (
        <TableBody>
            {body.map((bodyItem,index) => (
                <StyledBodyRow key={index}>
                    <StyledBodyCell with={'20%'} style={{ paddingLeft: '30px' }}>
                        {bodyItem.icon}
                    </StyledBodyCell>

                    <StyledBodyCell width={'90%'}>
                        {bodyItem.date}
                    </StyledBodyCell>
                    <StyledBodyCell  width={'10%'} >
                        {renderPollPill(bodyItem.status)}
                    </StyledBodyCell>


                </StyledBodyRow>
            ))}
        </TableBody>
    );
};

export default PollResultsBody;