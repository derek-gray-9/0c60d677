const baseUrl = 'https://aircall-backend.onrender.com/activities';

export const ActivitiesApi = {
    getAll: async function() {
        try {
            alert(baseUrl);
            const response = await fetch(baseUrl);
            const activities = await response.json();

            return activities;
        } catch (error) {
            console.log(error);
        }
    }
};
