import React from 'react';
import {
    StyledBox,
    StyledH3,
    StyledScreen,
} from '../../common/styledCommonComponents';
import {
    Table,
    TableContainer,
} from '@material-ui/core';



import PatientListHeader from "../PatientList/PatientListHeader";
import PatientListBody from "../PatientList/PatientListBody";
import PatientListBottom from "../PatientList/PatientListBottom";
import SearchBar from "../PatientList/SearchBar";
import CardsHeader from "../PatientList/CardsHeader";

const PollResultsScreen = () => {
    return (
        <StyledScreen
            css={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <StyledBox
                css={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '20px',
                    padding: '20px 40px',
                    width: '100%',
                    boxSizing: 'border-box',
                }}
            >
                <StyledH3>Registros diarios y semanales de Agustin Von Chiwisky</StyledH3>
                <StyledBox
                    css={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'top,',
                        boxSizing: 'border-box',
                        width: '100%',
                        height: '16px',
                        borderBottom: '1px solid #E1D1FC',
                    }}
                />

                <StyledBox
                    as={TableContainer}
                    css={{
                        maxWidth: '100vw',
                        width: 'calc(100vw - 40px)',
                    }}
                >
                    <Table>
                        <PatientListHeader />
                        <PatientListBody />
                    </Table>
                    <PatientListBottom />
                </StyledBox>
            </StyledBox>
        </StyledScreen>
    );
};
export default PollResultsScreen;