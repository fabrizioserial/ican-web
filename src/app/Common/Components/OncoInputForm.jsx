import React from "react";
import styled from "styled-components";
import { accentColor, errorColor, primaryColor } from "../Colors";
import OncoInput from "./OncoInput";

const OncoInputFormWrapper = styled.div`
  position: relative;
  width: 80%;

  & > legend {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
    color: ${props => props.color};
    transition: 0.2s;

  }
`;

const OncoInputIconWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 5%;
  transform: translateY(10%);
  cursor: pointer;
  transition: 0.2s;
  border: none;

  &:hover {
    color: ${accentColor}
  }
`;

const OncoInputForm = ({ placeholder, legend, onChangeText, type, icon: Icon, iconAction, error }) => (
  <OncoInputFormWrapper color={error ? errorColor : primaryColor}>
    <legend>{legend}</legend>
    <OncoInput
      outlineColor={error ? errorColor : primaryColor}
      placeholder={placeholder}
      onChangeText={onChangeText}
      type={type}
    />
    {Icon && <OncoInputIconWrapper tabIndex={0} onClick={iconAction}>{Icon}</OncoInputIconWrapper>}
  </OncoInputFormWrapper>
);

export default OncoInputForm;
