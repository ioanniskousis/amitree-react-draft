import './stylesheets/style.css';
import { Component } from 'react';
import { NavBar } from './components/nav/navBar';
import { Main } from './components/main';
import { loginRequest } from './modules/login';
import { signUpRequest } from './modules/signup';
import { createReferral } from './modules/createReferral';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiURL: '',
      current_view: 'home',
      userInfo: {
        userName: 'not authenticated',
        auth_token: 'not authenticated',
        inviterName: 'not authenticated',
        creditFromSignup: '$0',
        referral: 'not authenticated',
        invitedUsers: [],
        creditFromReferral: 'not authenticated',
      },
      referralTicket: ''
    }
    this.navigate = this.navigate.bind(this);
    this.login = this.login.bind(this);
    this.signUp = this.signUp.bind(this);
    this.createReferral = this.createReferral.bind(this);
  }

  componentDidMount() {
    const params = new URLSearchParams(document.location.search.substring(1));
    const referral_code = params.get("referral_code");
    const api_param = params.get("apiURL");
    if (api_param) {
      this.setState({apiURL: api_param})
    } else {
      this.setState({apiURL: 'http://localhost:3000'})
      // this.setState({apiURL: 'https://boiling-fjord-82978.herokuapp.com'})
    }
    if (referral_code) {
      this.setState({
        current_view: 'signup',
        referralTicket: referral_code
      })
    }
  }

  navigate(view) {
    this.setState({current_view: view});
  }

  login(event) {
    event.preventDefault();
    const form = event.currentTarget;
    loginRequest(form, this.state.apiURL, (results) => {
      if (results) this.setState(results);
    });
  }

  signUp(event) {
    event.preventDefault();
    const form = event.currentTarget;
    signUpRequest(form, this.state.apiURL, (results) => {
      if (results) this.setState(results);
    });
  }

  createReferral(event) {
    event.preventDefault();
    createReferral(this.state.apiURL, this.state.userInfo.auth_token, (results) => {
      if (results) {
        this.setState((state) => ({
          userInfo: {
            ...state.userInfo,
            referral: results.referral
          }
        }));
      }
    })
  }

  render() {
    const { current_view } = this.state;
    return (
      <div className="App">
        <NavBar navigate={this.navigate} />
        <Main 
          current_view={current_view}
          loginRequest={this.login}
          signUpRequest={this.signUp}
          referralRequest={this.createReferral}
          userInfo={this.state.userInfo}
          referralTicket={this.state.referralTicket}
        />
      </div>
    );
  }
}

export default App;
