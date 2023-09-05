import { createSelector } from 'reselect';

export const filterTypeSelected = (state) => state.notifications.get('filter');
export const getNotifications = (state) => state.get('notifications');

// export function getUnreadNotifications(state) {
//   const notifs = state.notifications.get('messages');
//   if (notifs) {
//     return Object.values(notifs)
//       .filter((value) => value.isRead === false);
//   }
//   return notifs
// }

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
