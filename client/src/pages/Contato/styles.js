import styled from "styled-components";

export const ContactBx = styled.section`
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    min-height: calc(100vh - 70px);
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    .lista {
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        li a {
            font-size: 3em;
            color: #0d0d0d;
            font-family: var(--varela-round);
            &:hover {
                text-decoration: underline;
            }
        }
    }
`;