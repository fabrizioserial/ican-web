import React, {useEffect, useState} from "react";
import DailyIcon from "../../../assets/DailyIcon";
import WeeklyIcon from "../../../assets/WeeklyIcon";
import {StyledBox} from "../../../common/styledCommonComponents";
import {
    backgroundColorStatus,
    ModalTypeEnum,
    renderPollPill,
    renderStatusPill,
    textColorStatus
} from "../../../utils/utils";
import TableBody from "@material-ui/core/TableBody";
import {StyledBodyCell, StyledBodyRow} from "../../PatientList/PatientListBody/styles";
import {useDispatch} from "react-redux";
import {setModalOpen} from "../../../redux/slices/utilsSlice";
import WeeklyModalIcon from "../../../assets/WeeklyModalIcon";


const PollResultsBody = () => {
    const dispatch  = useDispatch()
    const [body, setBody] = useState([
        {
            date:" 14 de noviembre 2022" ,
            status: 'completed',
            icon: <DailyIcon/>,
        },
        {
            date:" 14 de noviembre 2022" ,
            status: 'completed',
            icon: <WeeklyModalIcon/>,
        },
        {
            date:" 14 de noviembre 2022" ,
            status: 'completed',
            icon: <DailyIcon/>,
        },
        {
            date:" 14 de noviembre 2022" ,
            status: 'completed',
            icon:  <WeeklyModalIcon/>,
        },
        {
            date:" 14 de noviembre 2022" ,
            status: 'completed',
            icon: <DailyIcon/>,
        },
        {
            date:" 14 de noviembre 2022" ,
            status: 'completed',
            icon: <WeeklyModalIcon/>,
        },
        {
            date:" 14 de noviembre 2022" ,
            status: 'incomplete',
            icon: <WeeklyModalIcon/>,
        },
        {
            date:" 14 de noviembre 2022" ,
            status: 'incomplete',
            icon:  <DailyIcon/>,
        },
    ]);

    const parseData = ({DayItem}) => {
            let dayObject= new Date(DayItem)
            let day =""
                day =
                    dayObject.getDate() +
                    ' de ' +
                    getMonth(dayObject.getMonth());



    }


    const getMonth=( number)=>{
        if(number===1) return "Enero"
        if(number===2) return "Febrero"
        if(number===3) return "Marzo"
        if(number===4) return "April"
        if(number===5) return "Mayo"
        if(number===6) return "Junio"
        if(number===7) return "Julio"
        if(number===8) return "Agosto"
        if(number===9) return "Septiembre"
        if(number===10) return "Octubre"
        if(number===11) return "Noviembre"
        if(number===12) return "Diciembre"


    }

    const openModal = (n) => {
        if(n % 2 === 0) {
            dispatch(setModalOpen({open:true, type:ModalTypeEnum.DAILY_MODAL}))
        }else{
            dispatch(setModalOpen({open:true, type:ModalTypeEnum.WEEKLY_MODAL}))
        }
    }

    return (
        <TableBody>
            {body.map((bodyItem,index) => (
                <StyledBodyRow key={index} onClick={()=>openModal(index)}>
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