import React from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import './App.css';
import RegClient from './RegisterClients';
import ListClients from './ListClients';
import iTuneSearch from './iTunesAPI';
import About from './About';
import Login from './Login';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/about' component={About}></Route>
          <Route path='/ituneSearch' component={iTuneSearch}></Route>
          <Route path='/newClient' component={RegClient}></Route>
          <Route path='/listClients' component={ListClients}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
