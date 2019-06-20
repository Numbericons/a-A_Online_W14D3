import { connect } from 'react-redux';
import Greeting from './greeting';
import { logout } from '../../actions/session_actions'

const mapStateToProps = (state) => {
  let currentUser = state.entities.users[state.session.id];
  return { user: currentUser };
};

const mapDispatchToProps = dispatch => ({
  // signup: (user) => dispatch(signup(user)),
  // login: (user) => dispatch(login(user)),
  logout: () => dispatch(logout())
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Greeting);
