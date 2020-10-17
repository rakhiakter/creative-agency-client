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
import ServiceList from './Components/ServiceList/ServiceList';
import ReviewList from './Components/ReviewList/ReviewList';
import ListOfServices from './Components/ListOfServices/ListOfServices';
import AddService from './Components/AddService/AddService';
import MakeAdmin from './Components/MakeAdmin/MakeAdmin';
import PrivateRoute from './Components/PraivetRoute/PrivateRoute';



export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
 <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    

    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
          
          <Route path="/login" component={Login}/>
           <PrivateRoute path="/order" component={Order}/>
           <Route path="/serviceList" component={ServiceList}/>
           <Route path="/reviewList" component={ReviewList}/>
           <Route path="/listOfServices" component={ListOfServices}/>
           <Route path="/addService" component={AddService}/>
           <Route path="/makeAdmin" component={MakeAdmin}/>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
