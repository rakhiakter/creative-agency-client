import React, { useContext } from 'react';
import './login.css';



import { Link, useHistory, useLocation } from "react-router-dom";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import {UserContext} from "../../App"

const Login = () => {
 const [loggedInUser, setLoggedInUser] = useContext(UserContext);
 const history = useHistory();
 const location = useLocation();
 const { from } = location.state || { from: { pathname: "/" } };

 if (firebase.apps.length === 0) {
   firebase.initializeApp(firebaseConfig);
 }

 const handleGoogleSignIn = () => {
   var provider = new firebase.auth.GoogleAuthProvider();
   firebase
     .auth()
     .signInWithPopup(provider)
     .then(function (result) {
       const { displayName, email, photoURL } = result.user;
       const signedInUser = { name: displayName, email, photoURL };
       setLoggedInUser(signedInUser);
               history.replace(from);

     })
     .catch(function (error) {
       const errorMessage = error.message;
       console.log(errorMessage);
     });
 };


  return (
    <div className="container">
      <Link to="/">
       
        <img
          className=" center"
          src={require("../../images/logo.png")}
          alt=""
        />
      </Link>
      <div className="row login-row" id="google">
        <from id="middle">
          <h1 id="log">Login With</h1>
          <br />

          <button
            id="border"
            variant="light"
            type="button"
            size="lg"
            onClick={handleGoogleSignIn}
          >
            <img id="icon" src={require("../../images/google.png")} alt="" />
            <span id="continue"> Continue with Google</span>
          </button>
          <form className="text-muted">
            Don't have an Account? <a href="#">Create an account</a>
          </form>
        </from>
      </div>
    </div>
  );
};

export default Login;