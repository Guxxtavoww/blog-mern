import styled from "styled-components";

export const PostBx = styled.div`
    position: relative;
    width: 100%;
    max-width: 385px;
    min-height: fit-content;
    display: flex;
    flex-direction: column;
    background: #f0f0f0;
    border-radius: 7px;
    .postImg {
        width: 100%;
        height: 280px;
        object-fit: cover;
        border-radius: 7px 7px 0 0;
        user-select: none;
    }
    .postInfo {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
        .postBx {
            font-family: var(--varela-round);
            font-weight: 400;
            font-size: 11px;
            color: #be9656;
            line-height: 19px;
            margin-top: 15px;
            margin-right: 10px;
            cursor: pointer;
            .post {
                font-weight: 400;
                font-size: 11px;
                color: #be9656;
                line-height: 19px;
                margin-top: 15px;
                margin-right: 10px;
                cursor: pointer;
                .link {
                    color: inherit;
                }
            }
        }
        .postTitle {
            font-family: var(--josefin-font);
            font-size: 24px;
            font-weight: 900;
            margin-top: 15px;
            cursor: pointer;
            color: #be9656;
            .link {
                color: inherit;
            }
        }
        .postDate {
            font-family: var(--lora-font);
            font-style: italic;
            font-size: 13px;
            font-weight: 400;
            color: #999999;
            margin-top: 15px;
        }

    }
    .postDescBx {
        padding: 5px 10px;
        width: 100%;
        position: relative;
        min-height: 110px;
        .postDesc {
            font-family: var(--varela-round);
            font-weight: 400;
            font-size: 14px;
            line-height: 24px;
            color: #444444;
            overflow: hidden;
            text-overflow: ellipsis;
            text-align: justify;
            padding: 1rem;
        }
    }
    @media screen and (max-width: 991px) {
        & {
            max-width: 100%;
        }
    }
`;