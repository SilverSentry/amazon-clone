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
           <Header />
            <Checkout />
          </Route>
          
          <Route path="/login">
    
           <Login/>
          </Route>
    
          <Route path="/payment">
           <Header />
            <Payment />
          </Route>

          <Route path="/">
           <Header />
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
