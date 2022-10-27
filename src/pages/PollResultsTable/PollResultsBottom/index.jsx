import React from 'react';
import { TableCell, TableRow } from '@material-ui/core';
import { StyledBox } from '../../../common/styledCommonComponents';
import ArrowLeftIcon from '../../../assets/ArrowLeftIcon';
import ArrowRightIcon from '../../../assets/ArrowRightIcon';

const PollResultsBottom = ({ currentPage = 1, maxPages = 10 }) => {
    const handleMoveToNextPage = () => {};
    const handleMoveToPreviousPage = () => {};
    return (
        <StyledBox
            css={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: '20px',
                borderRadius: '0 0 15px 15px',
                boxSizing: 'border-box',
                backgroundColor: 'white',
                alignItems: 'center',
                height: '68px',
            }}
        >
            <StyledBox
                css={{
                    width: '76px',
                    height: '34px',
                    borderRadius: '15px',
                    border: '1px solid rgba(225, 209, 252, 0.22)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                }}
                onClick={handleMoveToPreviousPage}
                className={'withBoxShadow'}
            >
                <ArrowLeftIcon />
            </StyledBox>
            <StyledBox css={{ fontSize: '11px' }}>
                Pagina {currentPage} de {maxPages}
            </StyledBox>
            <StyledBox
                css={{
                    width: '76px',
                    height: '34px',
                    borderRadius: '15px',
                    border: '1px solid rgba(225, 209, 252, 0.22)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                }}
                onClick={handleMoveToNextPage}
                className={'withBoxShadow'}
            >
                <ArrowRightIcon />
            </StyledBox>
        </StyledBox>
    );
};

export default PollResultsBottom;