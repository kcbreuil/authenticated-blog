import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(AppContext);
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !user ? <Redirect to="/signup" /> : <Component {...routeProps} />
      }
    />
  );
};

export default PrivateRoute;
