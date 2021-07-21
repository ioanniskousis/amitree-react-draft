/* eslint-disable no-alert */

import './stylesheets/style.css';
import { Component } from 'react';
import { NavBar } from './components/nav/navBar';
import { Main } from './components/main';
import { loginRequest } from './modules/login';
import { signUpRequest } from './modules/signup';
import { createReferral } from './modules/createReferral';
import { usersIndexRequest, userInfoRequest } from './modules/users';

import { ActivityInticator } from './components/activityInticator';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiURL: '',
      currentView: 'home',
      authenticationInfo: {},
      userInfo: {},
      usersIndex: [],
      referralTicket: null,
      activityIndicator: false,
    };
    this.navigate = this.navigate.bind(this);
    this.login = this.login.bind(this);
    this.signUp = this.signUp.bind(this);
    this.loadUserInfo = this.loadUserInfo.bind(this);
    this.loadUsersIndex = this.loadUsersIndex.bind(this);
    this.referralRequest = this.referralRequest.bind(this);
  }

  componentDidMount() {
    const params = new URLSearchParams(document.location.search.substring(1));
    const referralCode = params.get('referral_code');
    const apiParam = params.get('apiURL');
    if (apiParam) {
      this.setState({ apiURL: apiParam });
    } else {
      this.setState({ apiURL: 'http://localhost:3000' });
      // this.setState({ apiURL: 'https://boiling-fjord-82978.herokuapp.com' })
    }
    if (referralCode) {
      this.setState({
        currentView: 'signup',
        referralTicket: referralCode,
      });
    }
  }

  login(event) {
    event.preventDefault();
    this.setState({ activityIndicator: true });

    const { apiURL } = this.state;
    const form = event.currentTarget;
    loginRequest(form, apiURL, (results) => {
      if (results) {
        this.setState({
          authenticationInfo: results,
          activityIndicator: false,
        });
        const { authenticationInfo } = this.state;
        const { userId } = authenticationInfo;
        this.loadUserInfo(userId);
        return;
      }
      this.setState({ activityIndicator: false });
    });
  }

  signUp(event) {
    event.preventDefault();
    const { apiURL } = this.state;
    const form = event.currentTarget;
    this.setState({ activityIndicator: true });
    signUpRequest(form, apiURL, (results) => {
      if (results) {
        this.setState({
          authenticationInfo: results,
          activityIndicator: false,
        });
        const { authenticationInfo } = this.state;
        const { userId } = authenticationInfo;
        this.loadUserInfo(userId);
        return;
      }
      this.setState({ activityIndicator: false });
    });
  }

  loadUserInfo(userId) {
    this.setState({ activityIndicator: true });
    const { authenticationInfo, apiURL } = this.state;
    const { authToken } = authenticationInfo;
    userInfoRequest(authToken, apiURL, userId, (results) => {
      if (results) {
        this.setState({
          userInfo: results,
          currentView: 'user-info',
          activityIndicator: false,
        });
        return;
      }
      this.setState({ activityIndicator: false });
    });
  }

  loadUsersIndex() {
    this.setState({ activityIndicator: true });

    const { authenticationInfo, apiURL } = this.state;
    const { authToken } = authenticationInfo;
    usersIndexRequest(authToken, apiURL, (results) => {
      if (results) {
        this.setState({
          usersIndex: results,
          currentView: 'users-index',
          activityIndicator: false,
        });
        return;
      }
      this.setState({ activityIndicator: false });
    });
  }

  referralRequest(event) {
    event.preventDefault();
    this.setState({ activityIndicator: true });
    const { apiURL, authenticationInfo } = this.state;
    const { authToken, userId } = authenticationInfo;
    createReferral(apiURL, authToken, (results) => {
      if (results) {
        this.loadUserInfo(userId);
        return;
      }
      this.setState({ activityIndicator: false });
    });
  }

  navigate(view) {
    switch (view) {
      case 'user-info': {
        const { authenticationInfo } = this.state;
        const { userId } = authenticationInfo;
        this.loadUserInfo(userId);
        break;
      }
      case 'users-index': {
        this.loadUsersIndex();
        break;
      }
      default: {
        this.setState({ currentView: view });
      }
    }
  }

  render() {
    const {
      userInfo,
      usersIndex,
      // apiURL,
      authenticationInfo,
      currentView,
      referralTicket,
      activityIndicator,
    } = this.state;
    return (
      <div className="App">
        <NavBar navigate={this.navigate} authenticationInfo={authenticationInfo} />
        <Main
          // apiURL={apiURL}
          authenticationInfo={authenticationInfo}
          currentView={currentView}
          referralTicket={referralTicket}
          loginRequest={this.login}
          signUpRequest={this.signUp}
          referralRequest={this.referralRequest}
          loadUserInfo={this.loadUserInfo}
          userInfo={userInfo}
          usersIndex={usersIndex}
        />
        <ActivityInticator show={activityIndicator} />
      </div>
    );
  }
}

export default App;
