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

  // setting up state for user
  const [ user, setUser ] = useState(null);
  // setting up state for store
  const [ stores, setStores ] = useState([]);
  // useRef Fetch Data
  const fetchData = useRef(null);
  // API URL FOR DEVELOPMENT
  const API_URL = 'http://localhost:3001/api/stores'; // DEV URL
  // API_URL FOR PRODUCTION

  // Store Helper Functions // get Stores
  const getStores = async () => {
    if(!user) return;

    // get a secure id token from our firebase user
    const token = await user.getIdToken();
    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    });
    const stores = await response.json();
    setStores(stores);
  }
  // Create Store
  const createStore = async person => {
    if(!user) return;
    const token = await user.getIdToken();
    const data = {...person, managedBy: user.uid} // attach loggin in user's uid to the data we send to the server
    await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-type': 'Application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify(data)
    });
    getStores(); // we can now refresh our list of stores
  }
  //Create Review
  const createReview = async (note, id) => {
    if(!user) return
  }

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
