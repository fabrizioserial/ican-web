import React, { useState } from 'react';

import "./Styles/LoginScreenStyle.css";

export default (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = e => {
        // e.preventDefault();
        let userData = { email, password }
        console.log(props)
        
        props.loginRequest(userData);
    } // Basic Func. TODO

    return <main>
        <strong>Login Screen</strong>

        {/* Test endpoint */}
        <input onChange={(text) => setEmail(text.target.value)} />
        <input onChange={(text) => setPassword(text.target.value)} />
        <button onClick={onSubmit}>env</button>
        {/*  */}
        
    </main>
}
