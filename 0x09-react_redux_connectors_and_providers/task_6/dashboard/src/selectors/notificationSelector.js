export const filterTypeSelected = (state) => state.get('filter');
export const getNotifications = (state) => state.get('notifications');

export function getUnreadNotifications(state) {
  const notifs = state.notifications.get('messages');
  if (notifs) {
    return Object.values(notifs)
      .filter((value) => value.isRead === false);
  }
  return notifs
}
