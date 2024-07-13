import { useState, useEffect } from 'react';
import Activity from './Activity.jsx';

const ActivityList = () => {
    const [activities, setActivities] = useState(null);
    const [showArchive, setShowArchive] = useState(false);

    useEffect(() => {
        fetch('https://aircall-backend.onrender.com/activities')
            .then((response) => response.json())
            .then((data) => {
                setActivities(data);
            })
            .catch(error => console.error(error));
    }, []);

    const switchToInbox = () => {
        setShowArchive(false);
    }

    const switchToArchive = () => {
        setShowArchive(true);
    }

    return (
      <div className="container-view">
        <button onClick={switchToInbox}>Inbox</button>
        <button onClick={switchToArchive}>Archive</button>
        {
          activities == null ? 'Loading...'
           : activities.filter(activity => {
               return activity.is_archived == showArchive;
           }).map(activity => <Activity activity={activity}/>)
        }
      </div>
    );
}

export default ActivityList;
