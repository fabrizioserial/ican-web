import React from 'react'
import { StyledBox } from "../../common/styledCommonComponents";
import WidgetHome from "../../componenets/WidgetHome";
import PatientsInTreatments from './components/PatientsInTreatments';

function HomeScreen() {

    return (
        <StyledBox css={{
            display: "flex",
            width: "100vw",
            minHeight: "100vh"
        }}>
            <StyledBox css={{
                display: "flex",
                flexDirection: "row",
                margin: "30px 60px",
                height: "inherit",
                width: "inherit",
            }}>
                <StyledBox css={{
                    display: "flex",
                    flexDirection: "column",
                    flex: 0.6,
                    maxWidth: "760px",
                }}>
                    <WidgetHome />
                </StyledBox>

                <PatientsInTreatments patientsInTreatment={50} totalPatients={70} />

            </StyledBox>

        </StyledBox>
    )
}

export default HomeScreen;