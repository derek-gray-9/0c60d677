import './ActivityList.css';

import { useState, useEffect } from 'react';

import Activity from '../Activity/Activity.jsx';
import { ActivityEntity } from '../../entities/ActivityEntity.js';
import { ActivitiesApi } from '../../api/ActivitiesApi.js';

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

    // Archives all, or unarchives all activities.
    const moveAll = () => {
        const newActivities = structuredClone(activities);

        newActivities.filter(activity => {
            return activity.isArchived === showArchive;
        }).forEach(activity => {
            activity.isArchived = !showArchive;
            ActivitiesApi.patch(activity.id, activity.isArchived);
        });
        
        setActivities(newActivities);
    }

    // Archives/unarchives a single activity.
    function moveOne(activityId) {
        const newActivities = structuredClone(activities);

        const activity = newActivities.find(activity => activity.id === activityId);
        activity.isArchived = !showArchive;
        ActivitiesApi.patch(activity.id, activity.isArchived).then(() => {
            setActivities(newActivities);
        });
    }

    return (
      <div className="container-view">
        <div class="tabs">
            <div class="tab" className={showArchive ? 'inactiveTab' : 'activeTab'} onClick={switchToInbox}>Inbox</div>
            <div class="tab" className={showArchive ? 'activeTab' : 'inactiveTab'} onClick={switchToArchive}>Archive</div>
        </div>
        <div>
          <button onClick={moveAll}>{showArchive ? 'Unarchive all' : 'Archive all'}</button>
        </div>
        {
          activities == null ? 'Loading...'
           : activities.filter(activity => {
               return activity.isArchived == showArchive;
           }).map(activity => <Activity key={activity.id} activity={activity} move={moveOne}/>)
        }
      </div>
    );
}

export default ActivityList;
