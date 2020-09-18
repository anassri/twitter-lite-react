import React from 'react';
import LoginForm from './components/session/LoginForm';
import { Redirect, Route } from 'react-router-dom';


export const ProtectedRoute = ({ component: Component, path, currentUserId, exact }) => {
    return (
        <Route
            path={path}
            exact={exact}
            render={(props) =>
                currentUserId ? <Component {...props} /> : <Redirect to="/login" />
            }
        />
    );
};

export const AuthRoute = ({ component: Component, path, currentUserId, exact }) => {
    return (
        <Route
            path={path}
            exact={exact}
            render={(props) =>
                currentUserId ? <Redirect to="/" /> : <Component {...props} />
            }
        />
    );
};