import React, {useState} from 'react';
import {StyledBox, StyledCardHome, StyledH3, StyledImg, StyledP,} from '../../common/styledCommonComponents';
import {useTheme} from 'styled-components';
import {ProfileConfigButton} from '../../utils/utils';
import ProfileButton from './ProfileButtons';

const PatientProfile = () => {
    const theme = useTheme();
    const [buttonList, setButtonList] = useState(ProfileConfigButton);
    return (
        <StyledBox>
            <StyledCardHome
                css={{
                    width: '1002px',
                    height: '193px',
                    background: theme.white,
                    borderRadius: '20px',
                    display: 'flex',
                    flexDirection: 'row',
                    paddingTop: "26px",
                    paddingBottom: "26px",
                    paddingLeft: "35px",
                    paddingRight: "35px",
                    boxSizing: "border-box",

                }}
            >
                <StyledBox css={{ display: "flex",
                    columnGap: "345px",
                    flexDirection:"row"}}>
                <StyledBox css={{ display: "flex",
                    flexDirection:"row"}}>
                <StyledBox
                    css={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'top',
                        columnGap:'20px'
                    }}
                >
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
                <StyledBox
                    css={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignSelf:'top',
                        flexWrap: 'wrap',
                        rowGap: '10px',

                    }}
                >
                    <StyledH3
                        css={{
                            font: 'Roboto',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            fontSize: '32px',
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'top',
                            justifyContent: 'flex-start',
                            alignSelf:'top',
                            margin:0,
                            whiteSpace: "nowrap"
                        }}
                    >
                        Agustin Von Staweski
                    </StyledH3>

                    <StyledBox
                        css={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'top',
                            flexWrap: 'wrap',
                            rowGap: '10px',
                            columnGap:'15px'
                        }}
                    >
                        <StyledBox
                            css={{
                                display: 'flex',
                                flexDirection: 'column',
                                flexWrap: 'wrap',
                                rowGap: '12px',
                            }}
                        >
                            <StyledP css={{
                                height: "13px",
                                fontStyle: "normal",
                                fontWeight: 300,
                                fontSize: "11px",
                                lineHeight: "13px",
                                font: 'Roboto',}}>Edad:</StyledP>
                            <StyledP css={{
                                height: "13px",
                                fontStyle: "normal",
                                fontWeight: 300,
                                fontSize: "11px",
                                lineHeight: "13px",
                                font: 'Roboto',}}>Sexo:</StyledP>
                            <StyledP css={{
                                height: "13px",
                                fontStyle: "normal",
                                fontWeight: 300,
                                fontSize: "11px",
                                lineHeight: "13px",
                                font: 'Roboto',}}>Nro:</StyledP>
                            <StyledP css={{
                                height: "13px",
                                fontStyle: "normal",
                                fontWeight: 300,
                                fontSize: "11px",
                                lineHeight: "13px",
                                font: 'Roboto',}}>Estado:</StyledP>
                        </StyledBox>
                        <StyledBox
                            css={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                            }}
                        >
                            <StyledP css={{
                                height: "13px",
                                fontStyle: "normal",
                                fontWeight: 300,
                                fontSize: "11px",
                                lineHeight: "13px",
                                font: 'Roboto',}}>52 años</StyledP>
                            <StyledP css={{
                                height: "13px",
                                fontStyle: "normal",
                                fontWeight: 300,
                                fontSize: "11px",
                                lineHeight: "13px",
                                font: 'Roboto',}}>Masculino</StyledP>
                            <StyledP css={{
                                height: "13px",
                                fontStyle: "normal",
                                fontWeight: 300,
                                fontSize: "11px",
                                lineHeight: "13px",
                                font: 'Roboto',}}>123132424</StyledP>
                            <StyledP css={{
                                height: "13px",
                                fontStyle: "normal",
                                fontWeight: 300,
                                fontSize: "11px",
                                lineHeight: "13px",
                                font: 'Roboto',}}>Activo</StyledP>
                        </StyledBox>
                    </StyledBox>
                </StyledBox>
                </StyledBox>



                <StyledBox
                    css={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        rowGap: '12px',

                    }}
                >
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
                </StyledBox>
            </StyledCardHome>
        </StyledBox>
    );
};
export default PatientProfile;
