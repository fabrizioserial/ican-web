import React, {useState} from 'react';
import {
    StyledBox, StyledP,
} from '../../../common/styledCommonComponents';
import CalendarIcon from "../../../assets/CalendarIcon";
import BackIcon from "../../../assets/BackIcon";
import DayCard from "./DayCard";
import {WeeklyScheduleConfig} from "../../../utils/utils";


const WeeklySchedule = () => {

    const [dayList, setDayList] = useState(WeeklyScheduleConfig)
    return (
        <StyledBox>
            <StyledBox css={{
                width: "305px",
                height: "200px",
                background: "#FFFFFF",
                boxShadow: "0px 4px 24px rgba(214, 203, 252, 0.15)",
                borderRadius: "15px",

            }}>
                <StyledBox css={{
                    display: "flex",
                    flexDirection: "row", rowGap: "0px", flexWrap: "wrap"
                }}>
                    <StyledBox>
                    <StyledBox css={{
                        boxSizing: "border-box",
                        width: "305px",
                        height: "51px",
                        border: "1px solid #F0EDED",
                        borderRadius: "15px 15px 0px 0px",
                        display: "flex",
                        flexDirection: "row",
                        columnGap: "9px",
                        padding: "21px 22px",
                    }}>
                        <CalendarIcon/>
                        <StyledP css={{
                            width: "167px",
                            height: "16px",
                            fontStyle: "normal",
                            fontWeight: 500,
                            fontSize: "14px",
                            lineHeight: "17px",
                            display: "flex",
                            alignItems: "center",
                            letterSpacing: "0.05em",
                            textTransform: "capitalize2",
                            color: "#AF7EFF",
                        }}> Agenda Semanal
                        </StyledP>
                    </StyledBox>
                    <StyledBox css={{
                        display: "flex",
                        flexDirection: "row",
                        columnGap: "123px",
                        paddingTop:"21px",
                        paddingRight:"18px",
                        paddingLeft:"18px",
                    }}>
                        <StyledBox css={{
                            display: "flex",
                            flexDirection: "row",
                            columnGap: "6px"
                        }}>
                            <BackIcon></BackIcon>
                            <StyledP css={{
                                width: "45px",
                                height: "13px",
                                fontStyle: "normal",
                                fontWeight: 300,
                                fontSize: "11px",
                                lineHeight: "13px",
                                display: "flex",
                                alignItems: "center",
                                letterSpacing: "0.05em",
                                textTransform: "capitalize",
                                color: "#949494",
                            }}>Anterior</StyledP>
                        </StyledBox>
                        <StyledBox css={{
                            display: "flex",
                            flexDirection: "row",

                        }}>
                            <StyledP css={{
                                width: "74px",
                                height: "13px",
                                fontStyle: "normal",
                                fontWeight: 500,
                                fontSize: "11px",
                                lineHeight: "13px",
                                display: "flex",
                                alignItems: "center",
                                letterSpacing: "0.05em",
                                textTransform: "capitalize",
                                color: "#AF7EFF", whiteSpace: "nowrap",
                                justifyContent: "flex-end"
                            }}>Esta Semana</StyledP>
                        </StyledBox>
                    </StyledBox>
                    </StyledBox>
                    <StyledBox css={{
                        display: "flex",
                        flexDirection: "row",
                        columnGap: "7px",
                        padding: "20px 18px"
                    }}>
                        {dayList.map((item, index) => (
                            <DayCard  key={index} index={index} dayNumber={item.dayNumber}
                                     dayName={item.dayName} state={item.state} detail={item.detail} />

                        ))
                        }
                    </StyledBox>
                </StyledBox>

            </StyledBox>
        </StyledBox>
    );
};

export default WeeklySchedule;