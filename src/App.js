import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Admin from './components/Admin/Admin';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import RegisterdTask from './components/RegistredTask/RegisterdTask';
import VolunteerRegister from './components/VolunteerRegister/VolunteerRegister';
export const userContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser] = useState({}); 
  return (
    <userContext.Provider value={[loggedInUser,setLoggedInUser]}>     
     <Router>
    <Switch>
      <Route path="/home">
        <Home></Home>
      </Route>
      <Route path="/login">
        <Login></Login>
      </Route>
      <Route path="/adminPanel">
        <Admin></Admin>
      </Route>
      <PrivateRoute path="/task">
        <RegisterdTask></RegisterdTask>
      </PrivateRoute>
      <PrivateRoute path="/register/:name">
        <VolunteerRegister></VolunteerRegister>
      </PrivateRoute>
       <Route exact path="/">
         <Home></Home>
       </Route>
       <Route  path="*">
         <h2 style={{color:'red'}}>Sorry Page Not Found! 404!</h2>
       </Route>
    </Switch>
    </Router>


    </userContext.Provider>
    
  );
}

export default App;
