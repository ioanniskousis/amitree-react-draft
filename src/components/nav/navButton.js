export function NavButton(props){
  return (
    <button
    className="nav-button"
    section={props.section}
    id={props.section + "-button"}
    onClick={() => props.navigate(props.section)}
    >
      {props.value}
    </button>
  )
}

export default NavButton
