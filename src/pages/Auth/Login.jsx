import React, { useEffect, useState } from 'react'
import "./Login.scss"
import axios from "axios"
import Logado from "../HomeLogado/Logado"
import { Redirect } from 'react-router';

const Login = () => {
    const [JSON_URL] = 'http://localhost:5000/usuarios?email='
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLogged, setIsLogged] = useState(false);
    //const [warning, setWarning] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.get(JSON_URL + email)
      .then(res => {
        const user = res.data[0];
        console.log(user);

        if (user.senha !== password) {
          alert('Senha Inválida');
        } else {
          localStorage.setItem('user-logged-in', JSON.stringify(user));
          setIsLogged(true);
                }
      })
        
    }

    useEffect(() => {
        if (localStorage.getItem('user-logged-in'))
          setIsLogged(true);
      }, [])

      if (isLogged) {
        return (<Redirect to='/Logado'/>);
      }

    return (
        <div className="container">
            <div className="message">
                <h1>Para continuar, faça login no Spotify.</h1>
            </div>
           
            <form className="form" onSubmit={handleSubmit}>
                <h1>Endereço de E-mail?</h1>
                <input type="email" placeholder="digite seu e-mail..." value={email}
                onChange={(e) => {setEmail(e.target.value)}}/>
                <h1>Senha</h1>
                <input type="password" placeholder="digite sua senha..." value={password}
                onChange={(e) => setPassword(e.target.value)}/>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login