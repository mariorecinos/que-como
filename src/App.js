import { useState, useEffect, useRef } from 'react';
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
  const API_URL = 'https://que-como-api.herokuapp.com/api/stores'; // DEV URL
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
  const createReview = async (review, id) => {
    if(!user) return;
    const token = await user.getIdToken();
    const data = { ...review, createdBy: user.uid };
    await fetch(`${API_URL}/${id}/review`, {
      method: 'POST',
      headers: {
        'Content-type': 'Applicaton/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify(data)
    });
    getStores();
  }

  // create a reference to our createStore function that persist between renders
  // this will help mitigate memory leaks
  useEffect(() => {
    fetchData.current = getStores;
  });

  // useEffect to only to render state once
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user);

      if(user) {
        fetchData.current();
      } else {
        setStores([]);
      }
    });

    return () => unsubscribe(); // clean up action - remove observer from memory when not needed
  }, [user]);

  return (
    <>
    <Header user={user}/>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/login" render={() => (
        user ? <Redirect to="/dashboard" /> : <Login />
      )} />
      <Route path="/dashboard" render={() => (
        user ? (
          <Dashboard
            stores={stores}
            createStore={createStore}
          />
        ) : <Redirect to="/login" />
      )} />
      <Route path="/stores/:id" render={(props) => (
        user ? (
          <Show
            store={stores.find(s => s._id === props.match.params.id)}
            createReview={createReview}
          />
        ) : <Redirect to="/login" />
      )} />
    </Switch>
    <Footer />
    </>
  );
}

export default App;
