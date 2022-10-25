import React from 'react'
import { StyledBox } from '../../common/styledCommonComponents';
import DailyColumnChart from '../DailyColumnChart'

const WidgetDailyChart = () => {
    const data = {
        mounth: "Octubre",
        data: {
            '1': [1],
            '2': [4],
            '3': [2],
            '4': [3],
            '5': [1],
            '6': [2],
            '7': [3],
            '8': [4],
            '9': [4],
            '10': [5],
            '11': [3],
            '12': [2],
            '13': [3],
            '14': [3],
            '15': [1],
            '16': [0],
            '17': [5],
            '18': [4],
            '19': [1],
            '20': [1],
            '21': [2],
            '22': [2],
            '23': [1],
            '24': [5],
            '25': [3],
            '26': [4],
            '27': [3],
            '28': [4],
            '29': [2],
            '30': [4],
            '31': [4],
        }
    };
    return (
        <StyledBox
            css={{
                width: '100%',
                display: 'flex',
            }}
        >
            <DailyColumnChart data={data} />
        </StyledBox>
    )
}

export default WidgetDailyChart