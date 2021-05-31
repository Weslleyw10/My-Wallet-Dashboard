import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Layout from '../Components/Layout'
import Dashboard from '../Pages/Dashboard'
import List from '../Pages/List'

const AppRoutes: React.FC = () => (
    <Layout>
        <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/list/:type" exact component={List} />
        </Switch>
    </Layout>
)

export default AppRoutes
