import React, { useState } from 'react';
import { StyledBox, StyledP } from '../../../common/styledCommonComponents';
import CalendarIcon from '../../../assets/CalendarIcon';
import BackIcon from '../../../assets/BackIcon';
import DayCard from './DayCard';
import { WeeklyScheduleConfig } from '../../../utils/utils';
import HungryIcon from '../../../assets/HungryIcon';
import Card from '../../../components/Card';

const TreatmentSection = () => {
    return (
        <Card
            title={'Tratamiento'}
            icon={<CalendarIcon />}
            width={305}
            height={200}
        >
            <>
                <StyledBox>

                </StyledBox>
            </>
        </Card>
    );
};

export default TreatmentSection;
