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
                <StyledBox
                    css={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'top',
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
                        flexDirection: 'column',
                        alignItems: 'stretch',
                        justifyContent: 'flex-start',
                        boxSizing: "border-box",
                        alignSelf:'top'

                    }}
                >
                    <StyledH3
                        css={{
                            font: 'Roboto',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            fontSize: '32px',
							width: '500px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'top',
                            justifyContent: 'flex-start',
                            alignSelf:'top',
                            margin:0
                        }}
                    >
                        Agustin Von Staweski
                    </StyledH3>

                    <StyledBox
                        css={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'top',
                        }}
                    >
                        <StyledBox
                            css={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',

                            }}
                        >
                            <StyledP>Edad:</StyledP>
                            <StyledP>Sexo:</StyledP>
                            <StyledP>Nro:</StyledP>
                            <StyledP>Estado:</StyledP>
                        </StyledBox>
                        <StyledBox
                            css={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                            }}
                        >
                            <StyledP>52 años</StyledP>
                            <StyledP>Masculino</StyledP>
                            <StyledP>123132424</StyledP>
                            <StyledP>Activo</StyledP>
                        </StyledBox>
                    </StyledBox>
                </StyledBox>


                <StyledBox
                    css={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
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
            </StyledCardHome>
        </StyledBox>
    );
};
export default PatientProfile;
