// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Field from 'src/components/Field';

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
  type: ownProps.type,
  nameIdFor: ownProps.nameIdFor,
  title: ownProps.title,
  label: ownProps.label,
  value: ownProps.value,
  error: ownProps.error,
  submission: ownProps.submission,
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
const FieldContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Field);

// == Export
export default FieldContainer;

/* = export à la volée
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Example);
*/
