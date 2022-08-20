import React, { useState } from "react";
import { Link } from "react-router-dom";

import Api from "../../Api";
import { CadastroSection, Error } from "./styles";

const Cadastro = () => {
    const [ email, setEmail ] = useState("");
    const [ username, setUserName ] = useState("");
    const [ password, setPassword ] = useState("");
    
    const [ error, setError ] = useState(false);

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            const res = await Api.post("auth/cadastro", {
                username,
                email,
                password,
            });
            
            res.data && window.location.replace("/login");
        } catch (error) {
            setError(true);
            console.log(error);
        }
    }

    return (
        <CadastroSection>
            <Link className="absoluteLogIn" to="/login">Logar-se</Link>
            <div className="cadastroWrapper">
                <span className="cadastroTitle">Faça seu Cadastro</span>
                <form className="cadastroForm" onSubmit={handleSubmit} method="post" action="/">
                    <div className="inputBx">
                        <label htmlFor="username">Nome de Usuário</label>
                        <input type="text" placeholder="Insira seu Nome de Usuário" name="username" id="username" autoFocus onChange={e => setUserName(e.target.value)} autoComplete="current-username" />
                    </div>
                    <div className="inputBx">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Insira seu E-mail" name="email" id="email" onChange={e => setEmail(e.target.value)} autoComplete="current-email" />
                    </div>
                    <div className="inputBx">
                        <label htmlFor="password">Senha</label>
                        <input type="password" placeholder="Insira sua Senha" name="password" id="password" onChange={e => setPassword(e.target.value)} autoComplete="current-password" />
                    </div>
                    <button type="submit">Cadastrar</button>
                </form>
                { error && <Error>Ocorreu um erro: Credenciais Inválidas.</Error> }
            </div>
        </CadastroSection>
    );
}

export default Cadastro;