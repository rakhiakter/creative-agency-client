import React, { useState } from 'react';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import { createContext } from 'react';
import Order from './Components/Order/Order';



export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
 <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    

    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
          
          <Route path="/login" component={Login}/>
           <Route path="/order" component={Order}/>
           
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
