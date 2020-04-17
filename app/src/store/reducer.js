// == Initial State
const initialState = {
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
const VALUE_CHANGED = 'VALUE_CHANGED';
export const USER_FORM_SUBMITTED = 'USER_FORM_SUBMITTED';
const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
const SIGNUP_FAIL = 'SIGNUP_FAIL';
const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
const SIGNIN_FAIL = 'SIGNIN_FAIL';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
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
        registerFail: true,
        registered: false,
        signedIn: false,
        signInFail: false,
      };
    case SIGNIN_SUCCESS:
      return {
        ...state,
        logged: true,
        signedIn: true,
        signInFail: false,
        token: action.userSessionData.token,
        sessionUserId: action.userSessionData.user.id,
        sessionUserFirstname: action.userSessionData.user.firstname,
        sessionUserEmail: action.userSessionData.user.email,
        registerFail: false,
        registered: false,
      };
    case SIGNIN_FAIL:
      return {
        ...state,
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
