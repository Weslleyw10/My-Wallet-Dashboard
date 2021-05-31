import React from 'react'

import { MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp } from 'react-icons/md'

import { Container, Header, LogoImg, Title, MenuContainer, MenuItem } from './style'

import logo from '../../Assets/logo.svg'

const Aside: React.FC = () => {
    return (
        <Container>
            <Header>
                <LogoImg src={logo} alt="Logo minha carteira" />
                <Title>Minha carteira</Title>
            </Header>

            <MenuContainer>
                <MenuItem href="/">
                    <MdDashboard />
                    Dashboard
                </MenuItem>

                <MenuItem href="/list/entry-balance">
                    <MdArrowUpward />
                    Entradas
                </MenuItem>
                
                <MenuItem href="/list/exit-balance">
                    <MdArrowDownward />
                    Saídas
                </MenuItem>

                <MenuItem href="#">
                    <MdExitToApp />
                    Sair
                </MenuItem>
            </MenuContainer>
            

        </Container>
    )

}

export default Aside;