export function ActivityInticator(props) {
  if (!props.show) return '';

  return (
    <div className="activity-indicator-container">
      <img src="gear.png" alt="" className="activity-indicator" />
    </div>
  )
}

export default ActivityInticator;
