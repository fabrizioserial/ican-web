import {useTheme} from "styled-components";
import {StyledBox, StyledP} from "../../../common/styledCommonComponents";
import React from "react";

const ProfileDetailText = ({text}) => {

    const theme = useTheme();
    return (
        <StyledP css={{
            height: "13px",
            fontStyle: "normal",
            fontWeight: 300,
            fontSize: "11px",
            lineHeight: "13px",
            font: 'Roboto',}}>{text}</StyledP>
    )

}

export default ProfileDetailText