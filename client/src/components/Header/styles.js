import styled from 'styled-components';

export const HeaderBox = styled.header`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 350px;
    padding: 0 10px;
    .headerTitles {
        font-family: var(--lora-font);
        z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .headerTitleSm {
            font-size: 3em;
            color: #fff;
            font-weight: 600;
            text-align: center;
            user-select: none;
        }
    }
    .headerImg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        display: block;
        z-index: -1;
        height: 350px;
        user-select: none;
    }
`;