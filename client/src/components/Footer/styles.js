import styled from "styled-components";

export const FooterBx = styled.footer`
    width: 100%;
    display: grid;
    place-items: center;
    padding: 1rem;
    span {
        font-size: 1.1em;
        color: #0d0d0d;
        font-family: var(--josefin-font);
        text-align: center;
        a {
            color: inherit;
            &:hover {
                text-decoration: underline;
            }
        }
    }
`;