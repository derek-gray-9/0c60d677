import { useState, useEffect } from 'react';

import Activity from './Activity.jsx';
import { ActivityEntity } from '../entities/ActivityEntity.js';

const ActivityList = () => {
    const [activities, setActivities] = useState(null);
    const [showArchive, setShowArchive] = useState(false);

    useEffect(() => {
        fetch('https://aircall-backend.onrender.com/activities')
            .then((response) => response.json())
            .then((data) => {
                setActivities(data.map(apiActivity => new ActivityEntity(apiActivity)));
            })
            .catch(error => console.error(error));
    }, []);

    const switchToInbox = () => {
        setShowArchive(false);
    }

    const switchToArchive = () => {
        setShowArchive(true);
    }

    const moveAll = () => {
        const newActivities = structuredClone(activities);
        newActivities.forEach(activity => activity.isArchived = !showArchive);
        setActivities(newActivities);
    }

    return (
      <div className="container-view">
        <button onClick={switchToInbox}>Inbox</button>
        <button onClick={switchToArchive}>Archive</button>
        <button onClick={moveAll}>{showArchive ? 'Unarchive all' : 'Archive all'}</button>
        {
          activities == null ? 'Loading...'
           : activities.filter(activity => {
               return activity.isArchived == showArchive;
           }).map(activity => <Activity activity={activity}/>)
        }
      </div>
    );
}

export default ActivityList;
