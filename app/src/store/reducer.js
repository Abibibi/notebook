// == Initial State
const initialState = {
  firstname: '',
  signUpEmail: '',
  signUpPassword: '',
  signUpConfirmPwd: '',
  signInEmail: '',
  signInPassword: ''
};

// == Types
const VALUE_CHANGED = 'VALUE_CHANGED';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case VALUE_CHANGED:
      return {
        ...state,
        [action.name]: action.value,
      };

    default:
      return state;
  }
};

// == Action Creators
export const valueChanged = (name, value)=> ({
  type: VALUE_CHANGED,
  name,
  value
});


// == Selectors


// == Export
export default reducer;
