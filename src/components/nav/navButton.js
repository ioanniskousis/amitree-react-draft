import PropTypes from 'prop-types';

export function NavButton(props) {
  const { value, section, navigate } = props;
  return (
    <button
      type="button"
      className="nav-button"
      onClick={() => navigate(section)}
    >
      {value}
    </button>
  );
}

NavButton.propTypes = {
  section: PropTypes.string,
  value: PropTypes.string,
  navigate: PropTypes.func,
};

NavButton.defaultProps = {
  section: null,
  value: null,
  navigate: null,
};

export default NavButton;
