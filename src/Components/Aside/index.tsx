import React, { useState } from 'react'

import Toggle from '../Toggle'

import { 
    MdDashboard, 
    MdArrowDownward, 
    MdArrowUpward, 
    MdExitToApp,
    MdClose,
    MdMenu

} from 'react-icons/md'

import { Container, 
    Header, 
    LogoImg, 
    Title, 
    MenuContainer, 
    MenuItem, 
    MenuItemButton,
    ToggleMenu,
    ThemeToggleFooter

} from './style'

import logo from '../../Assets/logo.svg'

import {useAuth} from '../../Hooks/auth'
import {useTheme} from '../../Hooks/theme'

const Aside: React.FC = () => {
    const {signOut} = useAuth()
    const { toggleTheme, theme } = useTheme()

    const [toggleMenuIsOpened, setToggleMenuIsOpened] = useState(false)

    const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false)



    const handleToggleMenu = () => {
        setToggleMenuIsOpened(!toggleMenuIsOpened)
    }

    const handleChangeTheme = () => {
        setDarkTheme(!darkTheme)
        toggleTheme()
    }

    return (
        <Container menuIsOpen={toggleMenuIsOpened}>
            <Header>
                <ToggleMenu
                    onClick={handleToggleMenu}
                >
                    {
                        toggleMenuIsOpened ? <MdClose />
                        : <MdMenu />
                    }
                </ToggleMenu>


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

            <ThemeToggleFooter
                menuIsOpen={toggleMenuIsOpened}
            >
                <Toggle 
                    labelLeft="Ligth"
                    labelRight="Dark"
                    checked={darkTheme}
                    onChange={handleChangeTheme}
                />
            </ThemeToggleFooter>
            
            

        </Container>
    )

}

export default Aside;