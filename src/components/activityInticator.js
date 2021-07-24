import PropTypes from 'prop-types';
import gear from '../images/gear.png';

export function ActivityInticator(props) {
  const { show, apiURL } = props;
  if (!show) return '';
  const accMsg = `Accessing: ${apiURL}`;
  return (
    <div className="activity-indicator-container">
      <div>
        <img src={gear} alt="" className="activity-indicator" />
        <p>{accMsg}</p>
      </div>
    </div>
  );
}

ActivityInticator.propTypes = {
  // eslint-disable-next-line react/require-default-props
  show: PropTypes.bool,
  apiURL: PropTypes.string,
};

ActivityInticator.defaults = {
  show: false,
  apiURL: '',
};

export default ActivityInticator;
