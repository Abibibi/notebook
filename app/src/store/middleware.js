import axios from 'axios';

import {
  USER_FORM_SUBMITTED,
  signUpSuccess,
  signUpFail,
} from 'src/store/reducer';

const middleware = (store) => (next) => (action) => {
  switch (action.type) {
    case USER_FORM_SUBMITTED: {
      console.log('dans le middleware')
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

      const API_URI = signup ? 'http://localhost:5000/users/add' : 'http://localhost:5000/users/login'

      axios.post(API_URI, user)
        .then((response) => {
          console.log(response);

          store.dispatch(signUpSuccess());
        })
        .catch((error) => {
          console.log('error', error);

          store.dispatch(signUpFail());
        });

      next(action);
      break;
    }
  }
  next(action);
};

export default middleware;
