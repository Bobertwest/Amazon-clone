import React, { useState } from 'react';
import './Login.css';
import logotipo from "./imagenes/logo2.png"
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (event) =>{
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then((auth) => {
                history.push("/");

            })
            .catch((e) => alert("lo siento carnal, no existe el usuario"));
    };

    const register = (event) =>{
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email,password).then((auth) => {
            history.push("/");

        })
        .catch((e) => alert("error"));
    };

    return (
        <div className="contenedor">
            
                <Link to="/" className="boton">
                    <img src={logotipo} alt="logo de amazon" />
                </Link>

                <form>
                    <h1 className="titulo_de_sign_In">Sign-in</h1>
                    <h2 className="correo">E-mail</h2>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email" className="entrada_mail"/>
                    <h2 className="contraseña">Password</h2>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password" className="entrada_contra"/>
                    <input onClick={login} type="submit" className="sign_in" value="Sign in" />
                    <p className="condiciones">Al crear tu cuenta en amazon, estas aceptando todos los terminos y condiciones que constituyen tener una cuenta ne amazon.
                    </p>
                    <input onClick={register} type="submit" className="sign_up" value="Create your amazon account" />
                </form>
        </div>
    )
}

export default Login
