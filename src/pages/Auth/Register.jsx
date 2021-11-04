import React from 'react'
import { useState } from "react";
import "./Register.scss"

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [warning, setWarning] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (password !== password2) {
            setWarning("As senhas não correspondem.");
        } else {
            localStorage.setItem("UserEmail", email);
            localStorage.setItem("UserPassword", password);
            setWarning("");
            setEmail("");
            setPassword("");
            setPassword2("");
        }
    }

    return (
        <div className="container">
            <div className="message">
                <h1>Inscreva-se grátis e comece a <br/> curtir.</h1>
            </div>
            <div className="warning">{warning}</div>
            <form className="form" onSubmit={handleSubmit}>
                <h1>Qual seu E-mail?</h1>
                <input type="email" placeholder="digite seu e-mail..." value={email}
                onChange={(e) => {setEmail(e.target.value)}}/>

                <h1>Crie uma senha</h1>
                <input type="password" placeholder="digite sua senha..." value={password}
                onChange={(e) => setPassword(e.target.value)}/>

                <h1>Confirme a senha</h1>
                <input type="password" placeholder="confirme sua senha..." value={password2}
                onChange={(e) => setPassword2(e.target.value)}/>

                <div>
                    <button>Registrar-se</button>
                </div>
            </form>
        </div>
    )
}


export default Register