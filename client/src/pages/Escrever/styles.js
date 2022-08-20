import styled from 'styled-components';

export const WriteBox = styled.section`
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1.5rem;
    padding: 1rem 0;
    .writeImg {
        border-radius: 10px;
        width: 100%;
        max-width: 1300px;
        max-height: fit-content;
        object-fit: cover;
        align-self: flex-start;
        margin-left: 2rem;
        object-fit: cover;
        overflow: hidden;
    }
    .writeForm {
        width: 100%;
        padding: 0 2rem;
        .writeFormGroup {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 1rem;
            label {
                padding: .5rem;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 1.2rem;
                color: #817D7D;
                border-radius: 50%;
                border: 1px solid #817D7D;
                cursor: pointer;
            }
            .writeInput {
                flex: 1;
                font-family: var(--varela-round);
                border: 1px solid rgba(0, 0, 0,.05);
                padding: 8px;
                &.text {
                    font-size: 1.5rem;
                }
                &.writeText {
                    resize: none;
                    min-height: 8rem;
                    font-size: 1.3rem;
                    width: 100%;
                }
            }
        }
        .writeSubmit {
            padding: 1rem;
            background: #39807F;
            color: #fff;
            border-radius: 8px;
            cursor: pointer;
            font-size: 1rem;
            font-family: var(--josefin-font);
            transition: .3s;
            &:hover {
                letter-spacing: 3px;
            }
        }
    } 
    @media screen and (max-width: 1440px) {
        .writeImg {
            max-width: 100%;
            border-radius: 0px;
            margin-left: 0;
        }
        .writeForm {
            padding: 0 1rem;
        }
    }
    @media screen and (max-width: 415px) {
        .writeForm {
            padding: 0 8px;
        }
        .writeFormGroup {
            flex-direction: column-reverse;
            .writeInput {
                &.text {
                    font-size: 1.2rem;
                    width: 100%;
                }
                &.writeText {
                    resize: none;
                    min-height: 8rem;
                    font-size: 1.1rem;
                    width: 100%;
                }
            }
        }
        
    }
`;