import styled from "styled-components";

export const TopbarContainer = styled.header`
    font-family: var(--josefin-font);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    padding: 0 8px;
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    gap: 1rem;
    place-items: center;
    z-index: 1000;
    background: #fff;
    .logo {
        font-size: clamp(1.1em, 4vmin, 2.5em);
        font-weight: 500;
        cursor: pointer;
        font-family: var(--lora-font);
        text-transform: uppercase;
        color: #0d0d0d;
    }
    .menuBx {
        position: relative;
        transition: .3s;
        height: 100%;
        .list {
            display: flex;
            align-items: center;
            gap: 2rem;
            height: 100%;
            .item {
                position: relative;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                & .link {
                    position: relative;
                    color: #0d0d0d;
                    text-transform: uppercase;
                    font-weight: 300;
                    font-size: 18px;
                    user-select: none;
                    background: transparent;
                    font-family: var(--josefin-font);
                    cursor: pointer;
                    &:hover {
                        color: #808080;
                    }
                }
                &.active::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    height: 3px;
                    width: 100%;
                    background: #0d0d0d;
                }
            }
        }
    }
    .toggle {
        display: none;
        visibility: none;
        cursor: pointer;
        font-size: 1.3em;
    }
    .searchBx {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
        .userImg {
            display: block;
            max-width: 40px;
            border-radius: 50%;
            border: 1px solid #f0f0f0;
        }
        .topList {
            display: flex;
            align-items: center;
            gap: 2rem;
            .topListItem {
                position: relative;
                .link {
                    position: relative;
                    color: #0d0d0d;
                    text-transform: uppercase;
                    font-weight: 500;
                    font-size: 1.2em;
                    user-select: none;
                    &:hover {
                        color: #808080;
                    }
                }
            }
        }
    }
    @media screen and (max-width: 991px) {
        & {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 2rem;
        }
        .menuBx {
            position: fixed;
            visibility: hidden;
            opacity: 0;
            width: 100%;
            top: -100%;
            left: 0;
            min-height: calc(100vh - 70px);
            background: #fff;
            .list {
                width: 100%;
                min-height: calc(100vh - 70px);
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 2rem;
                .item {
                    height: fit-content;
                    &.active::before {
                        display: none;
                    }
                    & .link {
                        font-size: 2em;
                    }
                }
            }
        }
        .menuBx.active {
            top: 70px;
            visibility: visible;
            opacity: 1;
        }
        .toggle {
            display: block;
        }
    }
`;