import styled from 'styled-components';

export const SingleBox = styled.section`
    position: relative;
    width: 100%;
    border-radius: 10px;
    background: #f5f5f5;
    .singleWrapper {
        width: 100%;
        height: 100%;
        padding: 1rem;
        .submit {
            color: #fff;
            padding: 1rem;
            font-family: var(--varela-round);
            background: #39807F;
            border-radius: 5px;
            cursor: pointer;
        }
        img {
            position: relative;
            width: 100%;
            object-fit: cover;
            max-height: fit-content;
            border-radius: 10px;
        }
        .head {
            width: 100%;
            display: flex; 
            justify-content: center;
            align-items: center;
            .inputTitle {
                width: 100%;
                padding: 8px;
                font-size: 2.5em;
                margin: 1rem 0;
                background: transparent;
            }
            &.edit {
                justify-content: flex-end;
                align-items: center;
                padding: 10px;
                gap: 40%;
            }
            h1 {
                font-size: 2.5em;
                font-family: var(--lora-font);
                letter-spacing: 2px;
            }
            .postEditBx {
                display: flex;
                align-items: center;
                gap: 1rem;
                .acao {
                    background: transparent;
                    cursor: pointer;
                    .acaoIcon {
                        font-size: 1.2rem;
                        &.iconEdit {
                            color: teal;
                        }
                        &.iconDel {
                            color: tomato;
                        }
                    }
                }
            }
        }
        .singlePostInfo {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            text-align: center;
            gap: 10px;
            margin: 10px 0;
            .linkBx {
                position: relative;
                display: inline-flex;
                align-items: center;
                color: #BE956A;
                gap: 5px;
                font-size: 1.5em;
                font-family: var(--varela-round);
                .link {
                    color: inherit;
                    font-weight: 600;
                    &:hover {
                        text-decoration: underline;
                    }
                }
            }
            .date {
                color: #BE956A;
                font-family: var(--varela-round);
                font-size: 1.2em;
                text-align: center;
            }
        }
        .content {
            font-size: 1.1em;
            font-family: var(--varela-regular);
            color: #777;
            letter-spacing: 1px;
            line-height: 1.6em;
            text-indent: 1.1em;
            p {
                text-align: justify;
            }
        }
    }
    @media screen and (max-width: 445px) {
        .singleWrapper {
            padding: 8px;
            .head {
                justify-content: center;
                flex-direction: column;
                gap: 1rem;
            }
            .date {
                flex: 1;
            }
        }
    }
`;