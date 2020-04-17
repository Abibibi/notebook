// == Initial State
const initialState = {
  firstname: '',
  signUpEmail: '',
  signUpPassword: '',
  signUpConfirmPwd: '',
  signInEmail: '',
  signInPassword: '',
  thought: '',
};

// == Types
const VALUE_CHANGED = 'VALUE_CHANGED';
export const USER_FORM_SUBMITTED = 'USER_FORM_SUBMITTED';
const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
const SIGNUP_FAIL = 'SIGNUP_FAIL';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case VALUE_CHANGED:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        registered: true,
        registerFail: false,
      };
    case SIGNUP_FAIL:
      return {
        ...state,
        registerFail: true,
        registered: false,
      };
    case USER_FORM_SUBMITTED:
      return {
        ...state,
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
// == Selectors


// == Export
export default reducer;
