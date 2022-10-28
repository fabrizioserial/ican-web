import React, {useState} from 'react';
import {StyledBox, StyledP} from '../../../../../../common/styledCommonComponents';
import WeeklyIcon from "../../../../../../assets/WeeklyIcon";
import MoodIcon from "../../../../../../assets/MoodIcon";
import PainIcon from "../../../../../../assets/PainIcon";
import ApetiteIcon from "../../../../../../assets/ApetiteIcon";
import HidrationIcon from "../../../../../../assets/HidrationIcon";
import SocialActivityIcon from "../../../../../../assets/SocialActivityIcon";


const DailyBody = () => {
    // const weekly = useSelector((state) => state.homeSlice.weekly);
    const [daily, setDaily] = useState([
        {
            category:"Animo" ,
            text: '5 de 10',
            icon: <MoodIcon/>

        },
        {
            category:"Dolor" ,
            text: '7 de 10',
            icon: <PainIcon/>,
        },
        {
            category:"Apetito" ,
            text: 'Menos de lo normal',
            icon: <ApetiteIcon/>,
        },
        {
            category:"Hidratación" ,
            text: 'Mas de 2 litros',
            icon: <HidrationIcon/>,
        },
        {
            category:"Actividad Social" ,
            text: 'Vi a amigos y conocidos por mas de una hora',
            icon: <SocialActivityIcon/>,
        },

    ]);


    return (
        <StyledBox css={{ padding: '30px 30px 40px' }}>
            {daily.map((item) => (
                <StyledBox css={{boxSizing: "border-box",
                    width: "786px",
                    height: "60px",
                    borderBottom:"1px solid #DEDEDE",
                    display:"flex",
                    flexDirection:"row",
                    columnGap: "136px"

                }}>
                <StyledBox css={{ display:"flex",
                    flexDirection:"row",columnGap: "18px"}}>
                <StyledBox css={{marginTop:"14px"}}>{item.icon}</StyledBox>
                    <StyledBox>
                        <StyledP css={{
                        width: "154px",
                        height: "24px",
                        fontStyle: "normal",
                        fontWeight: 500,
                        fontSize: "20px",
                        lineHeight: "24px",
                        display: "flex",
                        alignItems: "center",
                        color: "#333333",
                        marginTop:"16px"}}>{item.category} </StyledP>
                    </StyledBox>
                </StyledBox>
                    <StyledBox> <StyledP css={{
                        width: "414px",
                        height: "24px",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "20px",
                        lineHeight: "24px",
                        display: "flex",
                        alignItems: "center",
                        color: "#9357F7",
                        marginTop:"16px",
                    justifyContent:"flex-end"}}>{item.text}</StyledP>
                    </StyledBox>
                </StyledBox>

            ))}
        </StyledBox>
    );
};

export default DailyBody;
