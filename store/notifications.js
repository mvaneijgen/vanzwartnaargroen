export const state = () => ({
  notifications: [],
});

export const mutations = {
  addNotification(state, payload) {
    // const notification = payload;
    payload.id = state.notifications.length;

    state.notifications.push(payload);
  },
  removeNotification(state, date) {
    const removeIndex = state.notifications.findIndex(
      item => item.date == date
    );
    state.notifications.splice(removeIndex, 1);
  },
};

export const getters = {
  getNotifications: state => {
    return state.notifications;
  }
};
