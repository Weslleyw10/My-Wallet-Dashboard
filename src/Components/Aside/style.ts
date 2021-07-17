import styled, { css } from 'styled-components'

interface IContainerProps {
    menuIsOpen: boolean
}

interface IThemeToggleFooterProps {
    menuIsOpen: boolean;
}

export const Container = styled.div<IContainerProps>`
    grid-area: AS;
    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.colors.secondary};
    padding: 0 10px;
    border-right: 1px solid ${props => props.theme.colors.gray};
    position: relative;

    @media(max-width: 600px) {
        width: 200px;
        height: ${props => props.menuIsOpen ? '100vh' : '70px'};
        padding-left: 7px;
        position: fixed;
        z-index: 2;
        overflow: hidden;

        ${props => !props.menuIsOpen && css`
            border: none;
            border-bottom: 1px solid ${props => props.theme.colors.gray};
        `}
    }
`;

export const Header = styled.header`
    height: 70px;
    display: flex;
    align-items: center;
`;

export const LogoImg = styled.img`
    width: 40px;
    height: 40px;

    @media(max-width: 600px) {
        display: none;
        padding-left: 14px;
    }

`;

export const Title = styled.h1`
    color: ${props => props.theme.colors.white};
    margin-left: 10px;
    font-size: 22px;

    @media(max-width: 600px) {
        display: none;
    }


`;

export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    padding: 0 10px;
`;

export const MenuItem = styled.a`
    display: flex;
    align-items: center;

    color: ${props => props.theme.colors.info};
    text-decoration: none;
    transition: opacity .3s;  

    margin: 7px 0;     

    &:hover {
        opacity: .7;
    }

    > svg {
        margin-right: 5px;
    }

`;

export const MenuItemButton = styled.button`
    display: flex;
    align-items: center;
    font-size: 16px;

    color: ${props => props.theme.colors.info};
    background: transparent;
    border: none;

    transition: opacity .3s; 

    margin: 7px 0;     

    &:hover {
        opacity: .7;
    }

    > svg {
        margin-right: 5px;
    }

`;

export const ToggleMenu = styled.button`
    display: none;
    @media(max-width: 600px) {
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        font-size: 22px;
        background-color: ${props => props.theme.colors.warning};
        transition: opacity 0.3s;
        color: #ffffff;

        &:hover {
            opacity: 0.7;
        }

    }
`;

export const ThemeToggleFooter = styled.footer<IThemeToggleFooterProps>`
    display: none;
    position: absolute;
    bottom: 30px;

    @media(max-width: 600px) {
        display: ${props => props.menuIsOpen ? 'flex' : 'none'}
    }

`;


