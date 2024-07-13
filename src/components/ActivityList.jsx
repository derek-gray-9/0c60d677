import { useState, useEffect } from 'react';
import Activity from './Activity.jsx';

const ActivityList = () => {
    const [activities, setActivities] = useState(null);

    useEffect(() => {
        fetch('https://aircall-backend.onrender.com/activities')
            .then((response) => response.json())
            .then((data) => {
                setActivities(data);
            })
            .catch(error => console.error(error));
    }, []);

    return (
      <div className="container-view">
        {
          activities == null ? 'Loading...'
           : activities.map(activity => <Activity activity={activity}/>)
        }
      </div>
    );
}

export default ActivityList;
