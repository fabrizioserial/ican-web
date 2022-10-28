import React, {useEffect, useState} from 'react';
import {
    StyledBox,
    StyledH3,
    StyledScreen,
} from '../../common/styledCommonComponents';
import {
    Table,
    TableContainer,
} from '@material-ui/core';
import _ from "lodash"


import PollResultsHeader from "./PollResultsHeader";
import PollResultsBody from "./PollResultsBody";
import PollResultsBottom from "./PollResultsBottom";
import {useParams} from "react-router";
import {useLazyGetPollResultsQuery} from "../../redux/api/patientApi";

const PollResultsScreen = () => {
    const { patientId } = useParams();
    const [
        refetchPollResults,
        { data: dataPollResults, isSuccess: isSuccessPollResults },
    ] = useLazyGetPollResultsQuery();
    const [pollResults, setPollResults] = useState(undefined);

    useEffect(() => {
        refetchPollResults(patientId);
    }, []);

    useEffect(() => {
        if (dataPollResults)     {
            let finalArray=[]
            finalArray= finalArray.concat(dataPollResults.dailyReports.map((item)=>({...item, type:"daily"})),dataPollResults.weeklyReports.map(item =>({
                id: item.id,
                status: item.status,
                date: item.endDate,
                type:"weekly",
            })).filter(item => item.id))
            finalArray = _.orderBy(finalArray,"date",'desc')
            console.log(finalArray)
            setPollResults(dataPollResults);
        }
    }, [isSuccessPollResults]);
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
                        marginBottom:"43px",
                        paddingBottom:"16px"
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
                        <PollResultsHeader />
                        <PollResultsBody data={pollResults} />
                    </Table>
                    <PollResultsBottom />
                </StyledBox>
            </StyledBox>
        </StyledScreen>
    );
};
export default PollResultsScreen;