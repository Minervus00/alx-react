import { createSelector } from 'reselect';

export const filterTypeSelected = (state) => state.notifications.get('filter');
export const getNotifications = (state) => state.get('notifications');

export const getUnreadNotificationsByType = createSelector(
  filterTypeSelected,
  (state) => state.notifications.get('messages'),
  (filter, messages) => {
    if (!messages || !filter) { return [] }
    
    if (filter === 'DEFAULT') {
      return Object.values(messages)
      .filter((msg) => msg.isRead === false);
    } else {
      return Object.values(messages)
        .filter((msg) => (msg.isRead === false && msg.type === 'urgent'));
    }
  },
);
