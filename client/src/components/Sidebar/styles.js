import styled from "styled-components";

export const SidebarBox = styled.aside`
    position: relative;
    width: 100%;
    height: fit-content;
    background: #FDFBFB;
    padding: 1rem;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0,.02);
    .sidebarItem {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
        & > img {
            width: 100%;
            max-width: 250px;
        }
        & > p {
            padding: 2rem;
            max-width: 100%;
        }
        .sidebarSocial {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            gap: 1rem;
            margin-top: 1rem;
            a {
                color: #0d0d0d;
                .sidebarIcon {
                    font-size: 1.3rem;
                }
            }
        }
    }
    .sidebarTitle {
        padding: 5px;
        width: 100%;
        max-width: 255px;
        border-top: solid 1px #a7a4a4;
        border-bottom: solid 1px #a7a4a4;
        text-align: center;
        font-family: var( --varela-round);
        font-size: 12px;
        line-height: 19px;
        color: #222222;
        font-weight: 600;
        text-transform: uppercase;
        &.main {
            max-width: 570px;
        }
    }
    .sidebarList {
        width: 100%;
        max-width: 255px;
        padding: 1rem;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
        flex-wrap: wrap;
        .sidebarListItem {
            display: inline-block;
            text-align: center;
            max-width: 100%;
            cursor: pointer;
            .link {
                color: #0d0d0d;
            }
        }
    }  
`;