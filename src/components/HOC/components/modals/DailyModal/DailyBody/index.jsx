import React, {useState} from 'react';
import {StyledBox, StyledP} from '../../../../../../common/styledCommonComponents';
import WeeklyIcon from "../../../../../../assets/WeeklyIcon";


const DailyBody = () => {
    // const weekly = useSelector((state) => state.homeSlice.weekly);
    const [daily, setDaily] = useState([
        {
            category:"Animo" ,
            text: '5 de 10',
            icon: <WeeklyIcon/>

        },
        {
            category:"Dolor" ,
            text: '7 de 10',
            icon: <WeeklyIcon/>,
        },
        {
            category:"Apetito" ,
            text: 'Menos de lo normal',
            icon: <WeeklyIcon/>,
        },
        {
            category:"Hidratación" ,
            text: 'Mas de 2 litros',
            icon: <WeeklyIcon/>,
        },
        {
            category:"Actividad Social" ,
            text: 'Vi a amigos y conocidos por mas de una hora',
            icon: <WeeklyIcon/>,
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
                    flexDirection:"row"
                }}>
                <StyledBox>{item.icon}</StyledBox>
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
                        color: "#333333"}}>{item.category} </StyledP>
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
                        color: "#9357F7"}}>{item.text}</StyledP>
                    </StyledBox>
                </StyledBox>

            ))}
        </StyledBox>
    );
};

export default DailyBody;
