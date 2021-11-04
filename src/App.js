import { useState, useEffect, useRef } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Show from './pages/Show';

import { auth } from './services/firebase';

import './App.css';

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
