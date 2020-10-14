import React from 'react';
import { Redirect, Route } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../App";

const PrivateRoute = ({ component: ChildComponent, ...rest }) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
 
  return (
    <Route
      {...rest}
      render={(props) =>
        loggedInUser.email ? (
          <ChildComponent {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};


export default PrivateRoute;