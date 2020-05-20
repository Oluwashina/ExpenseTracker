import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './components/Home'
import Expense from './components/ExpenseTracker'


function App() {
  return (
    <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/expense" component={Expense} />
      </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;
