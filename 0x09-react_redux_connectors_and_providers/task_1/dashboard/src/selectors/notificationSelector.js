export const filterTypeSelected = (state) => state.get('filter');
export const getNotifications = (state) => Object.values(state.get('notifications'));

export function getUnreadNotifications(state) {
  const notifs = getNotifications(state);
  return notifs.filter((value) => value.isRead === false);
}
