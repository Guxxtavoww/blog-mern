import styled from "styled-components";

export const PostBx = styled.div`
    position: relative;
    display: grid;
    place-items: center;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    @media screen and (max-width: 1440px) {
        & {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @media screen and (max-width: 991px) {
        & {
            grid-template-columns: 1fr;
        }
    }
`;