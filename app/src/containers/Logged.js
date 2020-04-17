// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Logged from 'src/pages/Logged';

// Action Creators
import { valueChanged } from 'src/store/reducer';

/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = (state, ownProps) => ({
  thought: state.thought,
});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = (dispatch, ownProps) => ({
  valueChanged: (name, value) => {
    dispatch(valueChanged(name, value));
  },
});

// Container
const LoggedContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Logged);

// == Export
export default LoggedContainer;

/* = export à la volée
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Example);
*/
