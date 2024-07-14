const baseUrl = 'https://aircall-backend.onrender.com';

export const ActivitiesApi = {
    getAll: async function() {
        try {
            const response = await fetch(baseUrl + '/activities');
            const activities = await response.json();

            return activities;
        } catch (error) {
            console.log(error);
        }
    },

    patch: async function(id, isArchived) {
        try {
            const respone = await fetch(baseUrl + '/activities/' + id, {
                method: 'PATCH',
                body: JSON.stringify({ is_archived: isArchived })
            });

            return response;
        } catch (error) {
            console.log(error);
        }
    }
};
