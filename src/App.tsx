import React from 'react'

import { ThemeProvider } from 'styled-components'
import Routes from './Routes'
import { useTheme } from './Hooks/theme'

import GlobalStyle from './Styles/Global'

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

