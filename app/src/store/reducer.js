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
const SIGNUP_FORM_SUBMITTED = 'SIGNUP_FORM_SUBMITTED';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case VALUE_CHANGED:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SIGNUP_FORM_SUBMITTED:
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

export const signUpFormSubmitted = () => ({
  type: SIGNUP_FORM_SUBMITTED,
});
// == Selectors


// == Export
export default reducer;
