// == Import : npm
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// == Import : local
import Form from 'src/components/Form';

import { userFormSubmitted } from 'src/store/reducer';

// Action Creators

const mapStateToProps = (state, ownProps) => ({
  firstname: state.firstname,
  signUpEmail: state.signUpEmail,
  signUpPassword: state.signUpPassword,
  signUpConfirmPwd: state.signUpConfirmPwd,
  signInEmail: state.signInEmail,
  signInPassword: state.signInPassword,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  formSubmitted: (name, value) => {
    dispatch(userFormSubmitted());
  },
});

// Container
const FormContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form));

// == Export
export default FormContainer;

/* = export à la volée
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Example);
*/
