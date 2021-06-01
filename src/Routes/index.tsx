import React from 'react'

import { BrowserRouter } from 'react-router-dom'

import App from './app.routes'
import Auth from './auth.routes'

import { useAuth } from '../Hooks/auth'

const Routes: React.FC = () => {
    const { logged } = useAuth()

    console.log(logged)

    return (
        <BrowserRouter>
            { logged ? <App /> : <Auth /> }
        </BrowserRouter>
    )
}

export default Routes;
