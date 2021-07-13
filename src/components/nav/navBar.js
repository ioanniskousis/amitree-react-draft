import { NavButton } from './navButton';

export function NavBar(props) {
  return (
    <nav id="nav-bar">
      <NavButton section="home" value="Home" navigate={props.navigate} />
      <NavButton section="login" value="Login" navigate={props.navigate} />
      <NavButton section="signup" value="Sign Up" navigate={props.navigate} />
      <NavButton section="user" value="User" navigate={props.navigate} />
      <NavButton section="referral" value="Referral" navigate={props.navigate} />
    </nav>
  )
}

export default NavBar;