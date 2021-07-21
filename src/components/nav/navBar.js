/* eslint-disable react/forbid-prop-types */

import PropTypes from 'prop-types';
import { NavButton } from './navButton';

export function NavBar(props) {
  const { navigate, authenticationInfo } = props;
  return (
    <nav id="nav-bar">
      <NavButton section="home" value="Home" navigate={navigate} />
      <NavButton section="login" value="Login" navigate={navigate} />
      <NavButton section="signup" value="Sign Up" navigate={navigate} />
      {
        authenticationInfo.authToken
          ? (
            <NavButton section="user-info" value="User Info" navigate={navigate} />
          ) : ''
      }
      {
        authenticationInfo.authToken
          ? (
            <NavButton section="users-index" value="Users Index" navigate={navigate} />
          ) : ''
      }
    </nav>
  );
}

NavBar.propTypes = {
  navigate: PropTypes.func,
  authenticationInfo: PropTypes.object,
};

NavBar.defaultProps = {
  navigate: null,
  authenticationInfo: null,
};

export default NavBar;
