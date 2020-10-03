import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
    <Switch>
      <Route path="/home">
        <Home></Home>
      </Route>
       <Route exact path="/">
         <Home></Home>
       </Route>
       <Route  path="*">
         <h2 style={{color:'red'}}>Sorry Page Not Found! 404!</h2>
       </Route>
    </Switch>
    </Router>
  );
}

export default App;
