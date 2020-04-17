import axios from 'axios';

import {
  USER_FORM_SUBMITTED,
  signUpSuccess,
  signUpFail,
  signInSuccess,
  signInFail,
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

      const API_URI = signup ? 'add' : 'login';
      console.log(API_URI);
      console.log(signup);
      console.log(user);
      axios.post(`http://localhost:5000/users/${API_URI}`, user)
        .then((response) => {
          console.log(response);

          store.dispatch(signup ? signUpSuccess() : signInSuccess(response.data.user));
        })
        .catch((error) => {
          console.log('error', error.response.data);

          store.dispatch(signup ? signUpFail() : signInFail());
        });

      next(action);
      break;
    }
  }
  next(action);
};

export default middleware;
