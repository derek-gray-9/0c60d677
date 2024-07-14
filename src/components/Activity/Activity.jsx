import './Activity.css';

const moment = require('moment');

const Activity = (props) => {
    return (
      <div class="activity">
        { moment(props.activity.createdAt).format('YYYY-mm-dd') }
        Activity: {JSON.stringify(props.activity)}
      </div>
    );
}

export default Activity;
