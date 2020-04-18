// == Import : npm
import React, { useEffect } from 'react';
import {
  Route,
  withRouter
} from 'react-router-dom';

// == Import : local
import './app.scss';
import Unlogged from 'src/pages/Unlogged';
import Logged from 'src/containers/Logged';

// == Composant
const App = ({
  userStatus,
  logged,
}) => {
  useEffect(() => {
    // to avoid resizing (due to vh / vw) on mobile, especially on forms
    setTimeout(() => {
      const viewheight = window.innerHeight;
      const viewwidth = window.innerWidth;
      const viewport = document.querySelector('meta[name=viewport]');
      viewport.setAttribute('content', `height=${viewheight}px, width=${viewwidth}px, initial-scale=1.0`);
    }, 300);

    // to know whether user is already logged when arriving on page,
    // and, if so, to retrieve the information proper to them (id, firstname, email)
    userStatus();

    console.log(process.env)
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
    </div>
  );
};

// == Export
// withRouter to pass props to components
export default withRouter(App);
