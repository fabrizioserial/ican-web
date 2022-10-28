import React from 'react';
import Modal from '../Modal';
import {
    StyledBox,
    StyledP,
    StyledSpan,
} from '../../../../../common/styledCommonComponents';
import { useTheme } from 'styled-components';
import DailyBody from "./DailyBody";
import WeeklyIcon from "../../../../../assets/WeeklyIcon";
import DailyModalIcon from "../../../../../assets/DailyModalIcon";


const DailyModal = ({
                         date,
                         weeklyData,
                         state = 'COMPLETED',
                         handleOnClose,
                     }) => {
    const theme = useTheme();
    const renderState = () => {
        switch (state) {
            case 'COMPLETED':
                return (
                    <StyledSpan
                        css={{
                            fontSize: '11px',
                            backgroundColor: theme.patientListPillPositive,
                            borderRadius: '20px',
                            fontWeight: 500,
                            padding: '5px 20px',
                            color: '#1D6535',
                        }}
                    >
                        Completado
                    </StyledSpan>
                );
        }
    };
    return (
        <Modal
            onClose={handleOnClose}
            header={
                <StyledBox css={{ display: 'flex', flexDirection: 'row' }}>
                    <DailyModalIcon />
                    <StyledBox
                        css={{
                            marginLeft: '15px',
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <StyledBox
                            css={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <StyledP
                                css={{
                                    fontSize: '20px',
                                    fontWeight: 600,
                                    marginRight: '6px',
                                }}
                            >
                                Encuesta Diaria
                            </StyledP>
                            {renderState()}
                        </StyledBox>
                        <StyledP>12 de semptiembre de 2022</StyledP>
                    </StyledBox>
                </StyledBox>
            }
            body={<DailyBody />}
        />
    );
};

export default DailyModal;