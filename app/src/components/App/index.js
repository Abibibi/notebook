// == Import : npm
import React, { useEffect } from 'react';
import {
  Route,
  withRouter,
} from 'react-router-dom';

// == Import : local
import './app.scss';
import Unlogged from 'src/pages/Unlogged';
import Logged from 'src/containers/Logged';

// == Composant
const App = () => {
  useEffect(() => {
    setTimeout(() => {
      const viewheight = window.innerHeight;
      const viewwidth = window.innerWidth;
      const viewport = document.querySelector('meta[name=viewport]');
      viewport.setAttribute('content', `height=${viewheight}px, width=${viewwidth}px, initial-scale=1.0`);
    }, 300);
  }, []);

  return (
    <div id="app">
      <Route
        path={['/', '/inscription', '/connexion']}
        exact
        component={Unlogged}
      />
      <Route
        path="/bienvenue"
        exact
        component={Logged}
      />
    </div>
  );
};

// == Export
// withRouter to pass props to components
export default withRouter(App);
