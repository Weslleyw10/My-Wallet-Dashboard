import styled, { keyframes } from 'styled-components'

const animate = keyframes`
    0% {
        transform: translateX(100px);
        opacity: 0;
    }
    50% {
        opacity: .3;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
`;

interface IContainerProps {
    color: string;
}

export const Container = styled.div<IContainerProps>`
    width: calc(33% - 1%);
    height: 150px;
    margin: 10px 0;
    position: relative;    

    background: ${props => props.color};
    border-radius: 7px;
    padding: 10px 20px;

    overflow: hidden;
    animation: ${animate} .5s;

    > img {
        height: 110%;
        position: absolute;
        
        top: -10px;
        right: -30px;
        opacity: .3;
    }

    > span {
        font-size: 18px;
        font-weight: 500;
    }

    > small {
        font-size: 12px;
        position: absolute;
        bottom: 10px;
    }

    @media(max-width: 770px) {
        > span {
            font-size: 14px;
        }

        > h1 {
            word-wrap: break-word;
            font-size: 18px;

            > strong {
                width: 100%;
                display: inline-block;
                font-size: 14px;
            }
        }
    }

    @media(max-width: 420px) {
        width: 100%;

        > h1 {
            display: flex;
            font-size: 28px;

            > strong {
                position: initial;
                width: auto;
                font-size: 28px;
                margin-right: 10px;
            }
        }
    }


`;

export const Content = styled.div``;