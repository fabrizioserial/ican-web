import { InputWrapper } from "./StyledInput";

const Input = ({ placeholder, onChangeText, type = "text" }) => (
  <InputWrapper>
    <input
      type={type}
      placeholder={placeholder}
      onChange={(e) => onChangeText(e.target.value)}
    />
  </InputWrapper>
);

export default Input;