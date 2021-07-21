import PropTypes from 'prop-types';
import gear from '../images/gear.png';

export function ActivityInticator(props) {
  const { show } = props;
  if (!show) return '';

  return (
    <div className="activity-indicator-container">
      <img src={gear} alt="" className="activity-indicator" />
    </div>
  );
}

ActivityInticator.propTypes = {
  // eslint-disable-next-line react/require-default-props
  show: PropTypes.bool,
};

ActivityInticator.defaults = {
  show: false,
};

export default ActivityInticator;
