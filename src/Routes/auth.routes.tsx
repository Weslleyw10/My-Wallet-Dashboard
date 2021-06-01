import React from 'react';
import { Switch, Route } from 'react-router-dom'

import SignIn from '../Pages/SignIn'

const Auth: React.FC = () => (
  <Switch>
    <Route path="/" component={SignIn} />
  </Switch>
)

export default Auth;