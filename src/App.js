import React from 'react';
// import './App.css';
import Home from "./Components/Home/Home.js"
import Date from "./Components/Date/Date.js"
import Table from "./Components/Table/Table.js"
import Address from "./Components/Address/Address.js"

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';


const App = () => {
  return (
    <div className='App'>
      <Router>
        <Switch>

          <Route exact path='/' component={Home} />
          <Route exact path='/date' component={Date} />
          <Route exact path='/table' component={Table} />
          <Route exact path='/address' component={Address} />

        </Switch>
      </Router>

    </div>
  );
};

export default App;
