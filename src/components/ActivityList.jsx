import { useState, useEffect } from 'react';

import Activity from './Activity.jsx';
import { ActivityEntity } from '../entities/ActivityEntity.js';
import { ActivitiesApi } from '../api/ActivitiesApi.js';

const ActivityList = () => {
    const [activities, setActivities] = useState(null);
    const [showArchive, setShowArchive] = useState(false);

    useEffect(() => {
        ActivitiesApi.getAll().then(data => 
            setActivities(
                data.map(apiActivity => new ActivityEntity(apiActivity))
            )
        );
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
