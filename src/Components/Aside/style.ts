import styled from 'styled-components'


export const Container = styled.div`
    grid-area: AS;

    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.colors.secondary};

    padding: 0 10px;

    border-right: 1px solid ${props => props.theme.colors.gray}


`;

export const Header = styled.header`
    height: 70px;
    display: flex;
    align-items: center;
`;

export const LogoImg = styled.img`
    width: 40px;
    height: 40px;
`;

export const Title = styled.h1`
    color: ${props => props.theme.colors.white};
    margin-left: 10px;
    font-size: 22px;
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
        opacity: .7s;
    }

    > svg {
        margin-right: 5px;
    }

`;


