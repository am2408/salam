import React from 'react';
import logo from './logo.svg';
import './static/css/App.css';
import Home from './components/home';
import Basket from './components/basket';
import Nav from './components/nav';
import {Route, Switch} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
        <Route exact path="/" component= {Home}/>
        <Route exact path="/basket" component= {Basket}/>
      </Switch>
    </div>
  );
}

export default App;
