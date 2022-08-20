import React from 'react';

import { ContactBx } from "./styles";

const Contato = () => {
    return (
        <ContactBx>
            <ul className="lista">
                <li><a href="mailto:gustavoaugustocarcontato@gmail.com">Deseja Enviar um E-mail ?Clique Aqui.</a></li>
                <li><a href="https://gustavoaugusto.lunaquantica.com/" target="_blank" rel="noreferrer noopener">Quer saber mais sobre mim ?Clique Aqui.</a></li>
            </ul>
        </ContactBx>
    );
};

export default Contato;