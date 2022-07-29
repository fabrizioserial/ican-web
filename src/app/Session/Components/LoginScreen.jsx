import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loginRequest, logout } from '../session.slice';

function LoginScreen() {
  const dispatch = useDispatch()
  const [email, setEmail] = useState("manuelhernandez@sirius.com.ar");
  const [password, setPassword] = useState("manuel123");
  const accessToken = useSelector(state => state.sessionState.accessToken)

  return (
    <div>
      <div>
        <button
          aria-label="LANZAR LOGIN"
          onClick={() => dispatch(loginRequest({ email, password }))}
        >
          LANZAR LOGIN
        </button>

        <br/>
        <br/>

        <button
          aria-label="LOGOUT"
          onClick={() => dispatch(logout())}
        >
          LOGOUT
        </button>

        <br/>
        <br/>
        Access token: {accessToken}
      </div>
    </div>
  )
}

export default LoginScreen;