import styled from "styled-components";
import { accentColor, primaryColor } from "../../Colors";

const OncoInputWrapper = styled.div`
  width: 100%;
  display: flex;

  & > input {
    border-radius: 7px;
    border: 1px solid ${primaryColor};
    flex: 1;
    padding: 12px;
    font-size: 1rem;
    transition: 0.2s;

    outline: 2px solid ${props => props.outlineColor};
  }

  & > input:focus {
    border-color: transparent;
    outline: 2px solid ${accentColor};
  }
`;

const OncoInput = ({ placeholder, onChangeText, type = "text", outlineColor = "transparent" }) => (
  <OncoInputWrapper outlineColor={outlineColor}>
    <input
      type={type}
      placeholder={placeholder}
      onChange={(e) => onChangeText(e.target.value)}
    />
  </OncoInputWrapper>
);

export default OncoInput;
