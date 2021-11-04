import { useState, useEffect, useRef } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
    <Header />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/Dashboard">
        <Dashboard />
      </Route>
    </Switch>
    <Footer />
    </>
  );
}

export default App;
