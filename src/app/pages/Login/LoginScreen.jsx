import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LoginImage } from "../../Utils/SvgImages";
import { LoginFormSection, LoginImageSection, LoginWrapper, OncoLoginText } from "./StyledLoginScreen";
import SessionWrapper from "./session.api.wrapper";
import OncoButton from "../../Common/Components/OncoButton/OncoButton";
import OncoInputForm from "../../Common/Components/OncoInputForm/OncoInputForm";


function LoginScreen() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("manuel123");
  const [showPassword, setShowPassword] = useState(false);
  // const accessToken = useSelector((state) => state.sessionState.accessToken);
  const { login } = SessionWrapper(dispatch);

  const onSubmit = (e) => {
    e.preventDefault();
    let data = { email, password };
    dispatch(loginRequest(data));
  };

  return (
    <LoginWrapper>
      <LoginFormSection>
        <OncoLoginText>Log in</OncoLoginText>
        <form onSubmit={onSubmit}>
          <OncoInputForm
            legend="Dirección de email"
            onChangeText={setEmail}
            placeholder="name@example.com"
          />
          <OncoInputForm
            legend="Contraseña"
            onChangeText={setEmail}
            placeholder="at least 8 characters"
            Icon={() => (
              <span onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "ocultar" : "ver"}
              </span>
            )} // TODO IconType definition
            type={showPassword ? "text" : "password"}
          />
          <OncoButton text="Log in" /> {/* TODO ADD PENDING PARAM  */}
        </form>
      </LoginFormSection>
      <LoginImageSection>
        <LoginImage />
      </LoginImageSection>
    </LoginWrapper>
  );
}

export default LoginScreen;
