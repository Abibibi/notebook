// == Initial State
const initialState = {
  logged: false,
  loggedUserId: '',
  loggedUserFirstname: '',
  loggedUserEmail: '',
  token: localStorage.getItem('token'),
  firstname: '',
  signUpEmail: '',
  signUpPassword: '',
  signUpConfirmPwd: '',
  signInEmail: '',
  signInPassword: '',
  submitted: false,
  thought: '',
};

// == Types
export const IS_USER_LOGGED = 'IS_USER_LOGGED';
const USER_LOGGED = 'USER_LOGGED';
const FAILED_AUTH = 'FAILED_AUTH';
const VALUE_CHANGED = 'VALUE_CHANGED';
export const USER_FORM_SUBMITTED = 'USER_FORM_SUBMITTED';
const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
const SIGNUP_FAIL = 'SIGNUP_FAIL';
const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
const SIGNIN_FAIL = 'SIGNIN_FAIL';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case USER_LOGGED:
      return {
        ...state,
        logged: true,
        loggedUserId: action.userSessionData.id,
        loggedUserFirstname: action.userSessionData.firstname,
        loggedUserEmail: action.userSessionData.email,
      };
    case FAILED_AUTH:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        logged: false,
        loggedUserId: '',
        loggedUserFirstname: '',
        loggedUserEmail: '',
      }
    case VALUE_CHANGED:
      return {
        ...state,
        [action.name]: action.value,
        registered: false,
        registerFail: false,
        signedIn: false,
        signInFail: false,
        submitted: false,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        registered: true,
        registerFail: false,
        signedIn: false,
        signInFail: false,
      };
    case SIGNUP_FAIL:
      return {
        ...state,
        logged: false,
        registerFail: true,
        registered: false,
        signedIn: false,
        signInFail: false,
      };
    case SIGNIN_SUCCESS:
      localStorage.setItem('token', action.userSessionData.token);
      return {
        ...state,
        logged: true,
        signedIn: true,
        signInFail: false,
        loggedUserId: action.userSessionData.user.id,
        loggedUserFirstname: action.userSessionData.user.firstname,
        loggedUserEmail: action.userSessionData.user.email,
        registerFail: false,
        registered: false,
      };
    case SIGNIN_FAIL:
      localStorage.removeItem('token');
      return {
        ...state,
        logged: false,
        token: null,
        loggedUserId: '',
        loggedUserFirstname: '',
        loggedUserEmail: '',
        signInFail: true,
        signedIn: false,
        registerFail: false,
        registered: false,
      };
    case USER_FORM_SUBMITTED:
      return {
        ...state,
        submitted: true,
        firstname: '',
        signUpEmail: '',
        signUpPassword: '',
        signUpConfirmPwd: '',
        signInEmail: '',
        signInPassword: '',
      };
    default:
      return state;
  }
};

// == Action Creators
export const isUserLogged = () => ({
  type: IS_USER_LOGGED,
});

export const userLogged = (userSessionData) => ({
  type: USER_LOGGED,
  userSessionData
});

export const failedAuth = () => ({
  type: FAILED_AUTH,
});

export const valueChanged = (name, value) => ({
  type: VALUE_CHANGED,
  name,
  value,
});

export const userFormSubmitted = () => ({
  type: USER_FORM_SUBMITTED,
});

export const signUpSuccess = () => ({
  type: SIGNUP_SUCCESS,
});

export const signUpFail = () => ({
  type: SIGNUP_FAIL,
});

export const signInSuccess = (userSessionData) => ({
  type: SIGNIN_SUCCESS,
  userSessionData,
});

export const signInFail = () => ({
  type: SIGNIN_FAIL,
});
// == Selectors


// == Export
export default reducer;
