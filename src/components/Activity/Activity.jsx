import './Activity.css';

const moment = require('moment');

const Activity = (props) => {
    const move = () => {
        props.move(props.activity.id);
    }

    return (
      <div class="activity">
        <div class="activity-details">
          <div class="headline">Aircall via {props.activity.via}</div>
          <div class="details">
            <div class="date">
              { moment(props.activity.createdAt).format('MMM D, h:mma') }
            </div>
            <div class="info">
              {props.activity.from + ' called ' + props.activity.to}
            </div>
            <div class="info">
              {props.activity.direction}
            </div>
            <div class="info">
              {props.activity.callType}
            </div>
          </div>
        </div>
        <div class="move-button" onClick={move}>
          X
        </div>
      </div>
    );
}

export default Activity;
