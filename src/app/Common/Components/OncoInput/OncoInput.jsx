import { OncoInputWrapper } from "./StyledOncoInput";

const OncoInput = ({ placeholder, onChangeText, type = "text" }) => (
  <OncoInputWrapper>
    <input
      type={type}
      placeholder={placeholder}
      onChange={(e) => onChangeText(e.target.value)}
    />
  </OncoInputWrapper>
);

export default OncoInput;