import './Activity.css';

const moment = require('moment');

const Activity = (props) => {
    const move = () => {
        props.move(props.activity.id);
    }

    const displayDuration = (duration) => {
        return Math.floor(duration / 60) + 'm ' + (duration % 60) + 's';
    }

    return (
      <div class="activity">
        <div class="activity-details">
          <div class="row">
            <div class="info-wide">
              Aircall via { props.activity.via }
            </div>
            <div class="info-wide">
              Duration: { displayDuration(props.activity.duration) }
            </div>
          </div>
          <div class="row">
            <div class="date">
              { moment(props.activity.createdAt).format('MMM D, h:mma') }
            </div>
            <div class="info">
              { props.activity.from + ' called ' + props.activity.to }
            </div>
            <div class="info">
              { props.activity.direction }
            </div>
            <div class="info">
              { props.activity.callType }
            </div>
          </div>
        </div>
        <div class="move-button" onClick={ move }>
          X
        </div>
      </div>
    );
}

export default Activity;
