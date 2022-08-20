import styled from "styled-components";

export const SettingsSection = styled.div`
    position: absolute;
    top: 70px;
    left: 0;
    min-height: calc(100vh - 70px);
    width: 100%;
    gap: 1rem;
    padding: 1rem;
    .settingsWrapper {
        width: 100%;
        padding: 1rem;
        .settingsTitle {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 10px;
            .settingsTitleUpdate {
                font-size: 30px;
                margin-bottom: 20px;
                color: lightcoral;
                text-align: center;
            }
            .settingsTitleDelete {
                color: red;
                font-size: 12px;
                cursor: pointer;
                text-align: center;
                background: transparent;
            }
        }
        .settingsForm {
            display: flex;
            flex-direction: column;
            gap: 15px;
            span {
                font-size: 20px;
            }
            .settingsPP {
                display: flex;
                align-items: center;
                & > img {
                    object-fit: cover;
                    max-width: 70px;
                    max-height: 70px;
                    border-radius: 50%;
                    border: 1px solid rgba(0, 0, 0,.05);
                }
                .iconUser {
                    width: 25px;
                    height: 25px;
                    padding: 5px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border: none;
                    border-radius: 50%;
                    margin-left: 10px;
                    color: white;
                    background-color: lightcoral;
                    cursor: pointer;
                    &:focus {
                        outline-style: none;
                    }
                }
            }
            .inputBx {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                width: 100%;
                gap: 8px;
                font-family: var(--varela-round);
                label {
                    font-size: 20px;
                }
                input {
                    padding: 1rem 0;
                    font-size: 1rem;
                    color: #ddd;
                    font-family: var(--varela-round); 
                    width: 100%;
                    border-bottom: 2px solid #ddd;
                    &:focus {
                        border-bottom: 2px solid #0d0d0d;
                        color: #0d0d0d;
                    }
                }
            }
            button {
                padding: 1rem;
                color: #fff;
                background: #327371;
                cursor: pointer;
                border-radius: 10px;
                font-size: 1.4rem;
            }
        }
    }
    @media screen and (max-width: 600px) {
        & {
            grid-template-columns: 1fr;
            .settingsTitle {
                flex-direction: column;
                justify-content: center;
                gap: 5px;
            }
        }
    }
`;