import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>

          <Route path="/checkout">
            <Checkout />
          </Route>
    
          <Route path="/payment">
            <Payment />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
