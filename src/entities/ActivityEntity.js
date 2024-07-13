export class ActivityEntity {
    id;
    createdAt;
    direction;
    from;
    to;
    via;
    duration;
    isArchived;
    callType;

    constructor(apiActivity) {
        this.id = apiActivity.id;
        this.createdAt = apiActivity.created_at;
        this.direction = apiActivity.direction;
        this.from = apiActivity.from;
        this.to = apiActivity.to;
        this.via = apiActivity.via;
        this.duration = apiActivity.duration;
        this.isArchived = apiActivity.is_archived;
        this.callType = apiActivity.call_type;
    }
};