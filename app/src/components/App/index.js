// == Import : npm
import React, { useEffect } from 'react';
import {
  Route,
  withRouter,
  Redirect
} from 'react-router-dom';

// == Import : local
import './app.scss';
import Unlogged from 'src/pages/Unlogged';
import Logged from 'src/containers/Logged';

// == Composant
const App = ({ logged }) => {
  useEffect(() => {
    // to avoid resizing (due to vh / vw) on mobile, especially on forms
    setTimeout(() => {
      const viewheight = window.innerHeight;
      const viewwidth = window.innerWidth;
      const viewport = document.querySelector('meta[name=viewport]');
      viewport.setAttribute('content', `height=${viewheight}px, width=${viewwidth}px, initial-scale=1.0`);
    }, 300);
  }, []);

  return (
    <div id="app">
      {<Route
        path={['/', '/inscription', '/connexion']}
        exact
        component={Unlogged}
      />}
      {logged && <Route
        path="/bienvenue"
        exact
        component={Logged}
      />}
      {!logged && window.location.pathname === '/bienvenue' && (<Redirect to="/" />)}
      {logged && window.location.pathname !== '/connexion' && (<Redirect to="/bienvenue" />)}
    </div>
  );
};

// == Export
// withRouter to pass props to components
export default withRouter(App);
