import React, {useState} from "react";
import {
    StyledBox,
    StyledCardHome,
    StyledH1,
    StyledH3,
    StyledImg, StyledP,
    StyledP1,
    StyledSpan
} from "../../common/styledCommonComponents";
import {useTheme} from "styled-components";
import {ProfileConfigButton} from "../../utils/utils";
import ProfileButton from "./ProfileButtons";





const PatientProfile = () => {
    const theme = useTheme();
    const [buttonList, setButtonList] = useState(ProfileConfigButton);
    return (
        <StyledBox >
            <StyledCardHome css={{
                width: '1002px',
                height: '193px',
                background: theme.white,
                borderRadius: '20px',
                display:'flex',
                flexDirection:'row'
            }}>
                <StyledBox css={{

                    display:'flex',
                    flexDirection:'column'
                }}>
                <StyledImg
                    css={{
                        width: 79,
                        height: 79,
                        borderRadius: '50px',
                        imageRendering: '',
                        marginRight: '12px',
                    }}
                    firstChild={{
                        marginLeft: '0px',
                    }}
                    src={
                        'https://media.discordapp.net/attachments/411201278031560708/1023937441264054302/default_user.png'
                    }
                />
                </StyledBox>
            <StyledH3 css={{
                width: "188px",
                height: "38px",
                left: "242px",
                top: "70px",

                font: 'Roboto',
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "32px",
                lineHeight: "38px",

                display: "flex",
                alignItems: "center"}}>
                Agustin Von Staweski
            </StyledH3>

                <StyledBox css={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',}}>

             <StyledP>
                 Edad: 52 años
             </StyledP>
             <StyledP>
                 Sexo: Masculino
             </StyledP>
             <StyledP>
                 Nro: 123132424
             </StyledP>
             <StyledP>
                 Estado: Activo
             </StyledP>

                </StyledBox>
                <StyledBox css={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems:'center',


                }}>
                {buttonList.map((item, index) => (
                    <ProfileButton
                        text={item.text}
                        icon={item.icon}
                        color={item.color}
                        textColor={item.textColor}
                        key={index}
                    />
                ))}
                </StyledBox>

            </StyledCardHome>
        </StyledBox>
    );
};
export default PatientProfile;
