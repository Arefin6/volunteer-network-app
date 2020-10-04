import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import './Login.css';
import firebaseConfig from '../../../src/config/firebaseConfig';
import volunteerLogo from'../../logos/Group 1329.png';
import googleLogo from '../../logos/google.png';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
firebase.initializeApp(firebaseConfig);
const Login = () => {
    const [loggedInUser,setLoggedInUser] = useContext(userContext);
    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    var provider = new firebase.auth.GoogleAuthProvider();
   const handleGoogleLogin = () =>{
    firebase.auth().signInWithPopup(provider).then(function(result) {
       
        // The signed-in user info.
        var {displayName,email} = result.user;
        const signedInUser = {name:displayName,email};
        setLoggedInUser(signedInUser);
        history.replace(from);
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
   }

    return (
        <div>
            <img src={volunteerLogo} alt="" style={{width:"200px"}} className="logo"/>
             <div>
             <button className="btn-login" onClick={handleGoogleLogin}>
                 <img src={googleLogo} alt="" style={{width:"40px"}}/>
                 Continue With Google
             </button>
             </div>
             
        </div>
    );
};

export default Login;