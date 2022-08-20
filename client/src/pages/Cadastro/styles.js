import styled from "styled-components";

export const CadastroSection = styled.div`
    position: absolute;
    top: 70px;
    left: 0;
    min-height: calc(100vh - 70px);
    width: 100%;
    display: grid;
    place-items: center;
    padding: 1rem;
    background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url("https://images.pexels.com/photos/317355/pexels-photo-317355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
    background-size: cover;
    .cadastroWrapper {
        width: 100%;
        max-width: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        .cadastroTitle {
            font-size: clamp(25px, 5vmin, 50px);
            text-align: center;
        }
        .cadastroForm {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            align-items: center;
            .inputBx {
                width: 100%;
                display: flex;
                align-items: flex-start;
                flex-direction: column;
                gap: 10px;
                input {
                    width: 100%;
                    background: #fff;
                    padding: 8px;
                    border-radius: 8px;
                    font-size: 1.1em;
                }
            }
            button {
                width: 100%;
                padding: 8px 1rem;
                font-size: 1.2rem;
                cursor: pointer;
                background: #39807F;
                color: #fff;
                border-radius: 8px;
                transition: all .3s;
                text-transform: uppercase;
                font-family: var(--varela-round);
                font-weight: 600;
                letter-spacing: 2px;
                &:hover {
                    letter-spacing: 5px;
                }
            }
        }
    }
    .absoluteLogIn {
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        color: #fff;
        padding: 1rem;
        font-family: var(--varela-round);
        background: #ED8080;
        border-radius: 5px;
    }
`;

export const Error = styled.div`
    text-align: center;
    color: red;
    font-family: var(--varela-round);
    width: 100%;
`;