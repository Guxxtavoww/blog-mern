import { Link } from "react-router-dom";
import React, { useContext, useRef } from "react";

import Api from "../../Api";
import { LoginSection } from "./styles";
import { Context } from "../../context/Context";

const Login = () => {
    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context);

    const handleSubmit = async e => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await Api.post("auth/login", { username: userRef.current.value, password: passwordRef.current.value });
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
            res.data && window.location.replace("/");
        } catch (error) {
            dispatch({ type: "LOGIN_FAILURE" });
            console.log(error);
        }
    }

    return (
        <LoginSection>
            <Link className="absoluteSignUp" to="/cadastro">Cadastrar-se</Link>
            <div className="loginWrapper">
                <span className="loginTitle">Faça seu Login</span>
                <form className="loginForm" onSubmit={handleSubmit}>
                    <div className="inputBx">
                        <label htmlFor="username">Nome de Usuário</label>
                        <input type="text" placeholder="Insira seu Nome de Usuário" name="username" id="username" autoFocus ref={userRef} autoComplete="current-username" />
                    </div>
                    <div className="inputBx">
                        <label htmlFor="password">Senha</label>
                        <input type="password" placeholder="Insira sua Senha" name="passord" id="password" ref={passwordRef} autoComplete="current-password" />
                    </div>
                    <button type="submit" disabled={isFetching}>Logar</button>
                </form>
            </div>
        </LoginSection>
    );
}

export default Login;