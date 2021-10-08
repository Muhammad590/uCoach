import React from 'react';
// import './App.css';
import Home from "./Components/Home/Home.js"
import Date from "./Components/Date/Date.js"

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';


const App = () => {
  return (
    <div className='App'>
      <Router>
        <Switch>

          <Route exact path='/' component={Home} />
          <Route exact path='/date' component={Date} />

        </Switch>
      </Router>

    </div>
  );
};

export default App;
