import styled from 'styled-components';

export const SingleBox = styled.section`
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 1rem;
    padding: 1rem;
    @media screen and (max-width: 600px) {
        & {
            grid-template-columns: 1fr;
        }
    }
`;