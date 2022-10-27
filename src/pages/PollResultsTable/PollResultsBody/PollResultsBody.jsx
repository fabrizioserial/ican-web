import React, { useState } from 'react';
import { TableBody, TableCell, TableRow } from '@material-ui/core';
import { StyledBodyCell, StyledBodyRow, StyledUserStatus } from './styles';
import {
    backgroundColorStatus,
    getUserStatusLabel,
    textColorStatus,
} from '../../../utils/utils';
import { StyledBox, StyledImg } from '../../../common/styledCommonComponents';

const PollResultsBody = () => {
    const [body, setBody] = useState([
        {
            date:" 14 de noviembre 2022" ,
            status: 'Completed',
            icon:

        },
        {
            date:" 14 de noviembre 2022" ,
            status: 'Completed',
        },
        {
            date:" 14 de noviembre 2022" ,
            status: 'Completed',
        },
        {
            date:" 14 de noviembre 2022" ,
            status: 'Completed',
        },
        {
            date:" 14 de noviembre 2022" ,
            status: 'Completed',
        },
        {
            date:" 14 de noviembre 2022" ,
            status: 'Completed',
        },
        {
            date:" 14 de noviembre 2022" ,
            status: 'Completed',
        },
        {
            date:" 14 de noviembre 2022" ,
            status: 'Completed',
        },
    ]);

    const PollResultsStatus = (type) => {
        return (
            <StyledBox
                css={{
                    color: textColorStatus[type],
                    backgroundColor: backgroundColorStatus[type],
                    borderRadius: '10px',
                    width: '74px',
                    height: '24px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {getUserStatusLabel(type)}
            </StyledBox>
        );
    };

    return (
        <TableBody>
            {body.map((bodyItem) => (
                <StyledBodyRow>
                    <StyledBodyCell with={'5%'} style={{ paddingLeft: '30px' }}>

                    </StyledBodyCell>
                    <StyledBodyCell width={'12%'}>
                        {bodyItem.status}
                    </StyledBodyCell>
                    <StyledBodyCell width={'14%'}>
                        {bodyItem.date}
                    </StyledBodyCell>

                </StyledBodyRow>
            ))}
        </TableBody>
    );
};

export default PatientListBody;