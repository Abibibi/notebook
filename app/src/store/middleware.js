import axios from 'axios';

import {
  IS_USER_LOGGED,
  userLogged,
  failedAuth,
  USER_FORM_SUBMITTED,
  signUpSuccess,
  signUpFail,
  signInSuccess,
  signInFail,
} from 'src/store/reducer';

import tokenConfiguration from './tokenConfiguration';


const middleware = (store) => (next) => (action) => {
  switch (action.type) {
    case IS_USER_LOGGED: {
      const { token } = store.getState();

      axios.get('http://localhost:5000/users/info', tokenConfiguration(token))
        .then((response) => {
          store.dispatch(userLogged(response.data));
        })
        .catch((err) => {
          console.log(err.response.data)
          store.dispatch(failedAuth());
        })
      
      next(action);
      break;
    }
    case USER_FORM_SUBMITTED: {
      const {
        firstname,
        signUpEmail,
        signUpPassword,
        signUpConfirmPwd,
        signInEmail,
        signInPassword
      } = store.getState();
      
      const signup = window.location.pathname !== '/connexion';

      const user = {
        firstname: firstname,
        email: signup ? signUpEmail : signInEmail,
        password: signup ? signUpPassword : signInPassword,
        confirmPassword: signup ? signUpConfirmPwd : '',
      };

      const API_URI = signup ? 'add' : 'login';
      axios.post(`http://localhost:5000/users/${API_URI}`, user)
        .then((response) => {
          store.dispatch(signup ? signUpSuccess() : signInSuccess(response.data));

        })
        .catch(() => {
          store.dispatch(signup ? signUpFail() : signInFail());

        })
        .finally(() => {
          window.scrollTo(0,9999);
        })

      next(action);
      break;
    }
  }
  next(action);
};

export default middleware;
