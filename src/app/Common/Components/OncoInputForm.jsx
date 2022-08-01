import React from "react";
import styled from "styled-components";
import OncoInput from "./OncoInput";
// import Icon from 'react-web-vector-icons';

const OncoInputFormWrapper = styled.div`
    position: relative;
    width: 80%;

    & > legend {
        font-size: 1rem;
        font-weight: 500;
        margin-bottom: 0.5rem;
    }
`;

const OncoInputIconWrapper = styled.div`
    position: absolute;
    top: 50%;
    right: 5%;
    transform: translateY(25%);
    cursor: pointer;
`;

const OncoInputForm = ({ placeholder, legend, onChangeText, type, Icon }) => <OncoInputFormWrapper>
            <legend>{legend}</legend>
            <OncoInput placeholder={placeholder} onChangeText={onChangeText} type={type} />
            <OncoInputIconWrapper>
                {Icon && <Icon />}
            </OncoInputIconWrapper>
        </OncoInputFormWrapper>

export default OncoInputForm;