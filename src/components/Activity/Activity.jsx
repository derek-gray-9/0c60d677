import './Activity.css';

const moment = require('moment');

const Activity = (props) => {
    const move = () => {
        props.move(props.activity.id);
    }

    return (
      <div class="activity">
        <div class="details">
          <div class="date">
            { moment(props.activity.createdAt).format('MMM D, h:mma') }
          </div>
          <div class="info">
            {'activity info'}
          </div>
        </div>
        <div class="button" onClick={move}>
          X
        </div>
      </div>
    );
}

export default Activity;
