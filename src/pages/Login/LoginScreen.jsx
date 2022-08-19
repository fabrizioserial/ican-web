import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { LoginImage } from "../../utils/SvgImages";
import { LoginFormSection, LoginImageSection, LoginWrapper, LoginText } from "./StyledLoginScreen";
import SessionWrapper from "./sessionApiWrapper";
import Button from "../../common/components/button/Button";
import InputForm from "../../common/components/inputForm/InputForm";
import {useNavigate} from "react-router";


function LoginScreen() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  // const accessToken = useSelector((state) => state.sessionState.accessToken);
  const { login } = SessionWrapper(dispatch);
  const accessToken = useSelector((state) => state.authState.accessToken);
  const navigate = useNavigate()

  useEffect(()=>{
    accessToken && navigate("/home")
  },[accessToken])

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password)
  };

  return (
    <LoginWrapper>
      <LoginFormSection>
        <LoginText>Log in</LoginText>
        <form onSubmit={onSubmit}>
          <InputForm
            legend="Dirección de email"
            onChangeText={setEmail}
            placeholder="name@example.com"
          />
          <InputForm
            legend="Contraseña"
            onChangeText={setPassword}
            placeholder="at least 8 characters"
            Icon={() => (
              <span onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "ocultar" : "ver"}
              </span>
            )} // TODO IconType definition
            type={showPassword ? "text" : "password"}
          />
          <Button text="Log in" /> {/* TODO ADD PENDING PARAM  */}
        </form>
      </LoginFormSection>
      <LoginImageSection>
        <LoginImage />
      </LoginImageSection>
    </LoginWrapper>
  );
}

export default LoginScreen;
