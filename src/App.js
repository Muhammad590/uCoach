import React from 'react';
import './App.css';
import Home from "./Components/Home/Home.js"
import Date from "./Components/Date/Date.js"
import Table from "./Components/Table/Table.js"
import Address from "./Components/Address/Address.js"

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Recomend from './Components/RECOMMEND/Recomend.jsx';
import Swing from './Components/Swing/Swing.jsx';


const App = () => {
  return (
    <div className='App'>
      <Home />
      <Table />
      <Swing />
      <Address />
      <Recomend />
      {/* <Router>


        <Route exact path='/' component={Home} />
        <Route exact path='/table' component={Table} />
        <Route exact path='/address' component={Address} />
        <Route exact path='/recomend' component={Recomend} />
        <Route exact path='/swing' component={Swing} />


      </Router> */}

    </div>
  );
};

export default App;
