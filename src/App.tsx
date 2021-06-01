import React from 'react'

import GlobalStyle from './Styles/Global'
import { ThemeProvider } from 'styled-components'

import { useTheme } from './Hooks/theme'

import Routes from './Routes'

const App: React.FC = () => {
    const {theme} = useTheme()

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Routes />
        </ThemeProvider>
    )
}

export default App;