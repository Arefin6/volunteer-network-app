import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import VolunteerRegister from './components/VolunteerRegister/VolunteerRegister';
import volunteerRegister from './components/VolunteerRegister/VolunteerRegister';
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
      <Route path="/register/:name">
        <VolunteerRegister></VolunteerRegister>
      </Route>
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
