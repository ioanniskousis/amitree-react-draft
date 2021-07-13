import { HomeSection } from "./sections/homeSection";
import { LoginSection } from "./sections/loginSection";
import { SignupSection } from "./sections/signupSection";
import { UserSection } from "./sections/userSection";
import { ReferralSection } from "./sections/referralSection";

export function Main(props) {
  let current_view = '';
  switch (props.current_view) {
    case 'home': {
      current_view = <HomeSection />
      break;
    }
    case 'login': {
      current_view = <LoginSection loginRequest={props.loginRequest} />
      break;
    }
    case 'signup': {
      current_view = <SignupSection referralTicket={props.referralTicket} signUpRequest={props.signUpRequest} />
      break;
    }
    case 'user': {
      current_view = <UserSection userInfo={props.userInfo} />
      break;
    }
    case 'referral': {
      current_view = <ReferralSection userInfo={props.userInfo} referralRequest={props.referralRequest} />
      break;
    }
    default: {
      current_view = <HomeSection />
    }
  }

  return (
    <main>
      {current_view}
    </main>
  )
}

export default Main;
