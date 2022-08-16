import React from "react";
import OncoInput from "../OncoInput/OncoInput";
import { OncoInputFormWrapper, OncoInputIconWrapper } from "./StyledOncoInputForm";

const OncoInputForm = ({ placeholder, legend, onChangeText, type, Icon }) => (
  <OncoInputFormWrapper>
    <legend>{legend}</legend>
    <OncoInput
      placeholder={placeholder}
      onChangeText={onChangeText}
      type={type}
    />
    <OncoInputIconWrapper>{Icon && <Icon />}</OncoInputIconWrapper>
  </OncoInputFormWrapper>
);

export default OncoInputForm;