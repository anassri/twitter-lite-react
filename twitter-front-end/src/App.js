import React from 'react';
import RegistrationForm from './components/session/RegistrationForm';
import { Switch, Link, Route, BrowserRouter, NavLink } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import LoginForm from './components/session/LoginForm';
import { ProtectedRoute, AuthRoute } from './Routes';

const App = () => (
  <BrowserRouter>
    <div>
      <h1>Twitter Lite</h1>
      <NavLink exact to="/" activeClassName="active">Home</NavLink>
      <NavLink to="/register" activeClassName="active">Register</NavLink>
      <NavLink to="/login" activeClassName="active">Login</NavLink>
      <Switch>
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/users/:userId" component={Profile} />
        <AuthRoute path='/register' component={RegistrationForm} />
        <AuthRoute path='/login' component={LoginForm} />
        <Route path="/register" component={RegistrationForm} />
        <Route path="/login" component={LoginForm} />
        <Route path="/" component={Home} />
        <Route path="/users/:userId">
          <Profile />
        </Route>
      </Switch>
    </div>
  </BrowserRouter >
);

export default App;