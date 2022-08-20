import styled from "styled-components";

export const LoginSection = styled.div`
    position: absolute;
    top: 70px;
    left: 0;
    min-height: calc(100vh - 70px);
    width: 100%;
    background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url("https://images.pexels.com/photos/768473/pexels-photo-768473.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500");
    background-size: cover;
    display: grid;
    place-items: center;
    padding: 1rem;
    .loginWrapper {
        width: 100%;
        max-width: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        .loginTitle {
            font-size: clamp(25px, 5vmin, 50px);
            text-align: center;
        }
        .loginForm {
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
                background: #ED8080;
                color: #fff;
                border-radius: 8px;
                transition: all .3s;
                text-transform: uppercase;
                font-family: var(--varela-round);
                font-weight: 600;
                letter-spacing: 2px;
                &:disabled {
                    cursor: not-allowed;
                    background: coral;
                }
                &:hover {
                    letter-spacing: 5px;
                }
            }
        }
    }
    .absoluteSignUp {
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        color: #fff;
        padding: 1rem;
        font-family: var(--varela-round);
        background: #39807F;
        border-radius: 5px;
    }
`;