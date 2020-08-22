import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Checkout from './Checkout';
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function App() {
  const [{ user }, dispatch ] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser){
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      }else{
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    })

    return () => {
      unsubscribe();
    }

  },[]);

  return (
    <Router>
      <div className='app'>
        <Switch>
        <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/Login'>
            <Login />
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
