import styled, { keyframes } from 'styled-components'

const animate = keyframes`
    0% {
        transform: translateX(-100px);
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

interface ITagProps {
    color: string;
}

export const Container = styled.li`
    background: ${props => props.theme.colors.tertiary};
    list-style: none;

    border-radius: 5px;
    margin: 10px 0;
    padding: 12px 10px;

    display:flex;
    justify-content: space-between;
    align-items: center;

    cursor: pointer;

    position: relative;

    transition: all .3s;
    animation: ${animate} .5s ease;

    &:hover {
        opacity: .7;
        transform: translateX(10px);
    }

    > div {
        display:flex;
        flex-direction: column;
        justify-content: space-between;

        padding-left: 18px;

        > span {
            font-size: 12px;
        }
        
    }

`;

export const Tag = styled.div<ITagProps>`
    max-width: 10px;
    height: 30px;
    background: ${props => props.color};

    position: absolute;
    left: 0;

`;

