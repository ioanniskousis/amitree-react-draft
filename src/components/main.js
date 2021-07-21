/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';

import { HomeSection } from './sections/homeSection';
import { LoginSection } from './sections/loginSection';
import { SignupSection } from './sections/signupSection';
import { UserInfoSection } from './sections/userInfoSection';
import { UsersIndexSection } from './sections/usersIndexSection';

export function Main(props) {
  let currentView = '';
  switch (props.currentView) {
    case 'home': {
      currentView = <HomeSection />;
      break;
    }
    case 'login': {
      currentView = <LoginSection loginRequest={props.loginRequest} />;
      break;
    }
    case 'signup': {
      currentView = (
        <SignupSection
          referralTicket={props.referralTicket}
          signUpRequest={props.signUpRequest}
        />
      );
      break;
    }
    case 'user-info': {
      currentView = (
        <UserInfoSection
          authenticationInfo={props.authenticationInfo}
          userInfo={props.userInfo}
          referralRequest={props.referralRequest}
          loadUserInfo={props.loadUserInfo}
        />
      );
      break;
    }
    case 'users-index': {
      currentView = (
        <UsersIndexSection
          usersIndex={props.usersIndex}
          loadUserInfo={props.loadUserInfo}
        />
      );
      break;
    }
    default: {
      currentView = <HomeSection />;
    }
  }

  return (
    <main>
      {currentView}
    </main>
  );
}

Main.propTypes = {
  authenticationInfo: PropTypes.object,
  userInfo: PropTypes.object,
  usersIndex: PropTypes.array,
  currentView: PropTypes.string,
  referralTicket: PropTypes.string,
  loginRequest: PropTypes.func,
  loadUserInfo: PropTypes.func,
  signUpRequest: PropTypes.func,
  referralRequest: PropTypes.func,
};

Main.defaultProps = {
  authenticationInfo: null,
  userInfo: null,
  usersIndex: null,
  currentView: null,
  referralTicket: null,
  loginRequest: null,
  loadUserInfo: null,
  signUpRequest: null,
  referralRequest: null,
};

export default Main;
