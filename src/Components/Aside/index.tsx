import React from 'react'

import { MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp } from 'react-icons/md'

import { Container, Header, LogoImg, Title, MenuContainer, MenuItem, MenuItemButton } from './style'

import logo from '../../Assets/logo.svg'

import {useAuth} from '../../Hooks/auth'

const Aside: React.FC = () => {
    const {signOut} = useAuth()

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

                <MenuItemButton onClick={signOut}>
                    <MdExitToApp />
                    Sair
                </MenuItemButton>
            </MenuContainer>
            

        </Container>
    )

}

export default Aside;