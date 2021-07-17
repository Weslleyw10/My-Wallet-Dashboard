import React, {useMemo, useState} from 'react'

import { 
    Container, 
    Profile, 
    Welcome, 
    UserName 
} from './style'

import emojis from '../../utils/emojis'
import Toggle from '../Toggle'

import { useTheme } from '../../Hooks/theme'

const MainHeader: React.FC = () => {

    const { toggleTheme, theme } = useTheme()
    const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false)

    const emoji = useMemo(() => {
        const indice = Math.floor(Math.random() * emojis.length)
        return emojis[indice]

    }, []);

    const handleChangeTheme = () => {
        setDarkTheme(!darkTheme)
        toggleTheme()
    }

    return (
        <Container>
            <Toggle 
                labelLeft="Light"
                labelRight="Dark"
                checked={darkTheme}
                onChange={handleChangeTheme}
            />

            <Profile>
                <Welcome>Olá, {emoji}</Welcome>
                <UserName>Weslley L Silva</UserName>
            </Profile>


        </Container>

    )
}

export default MainHeader;