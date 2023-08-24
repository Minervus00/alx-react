import * as notifData from '../../notifications.json';

export function getAllNotificationsByUser(userId) {
  const allContext = [];

  for (const obj in notifData) {
    const auth = notifData[obj].author;
    if (auth && auth.id === userId) {
      allContext.push(notifData[obj].context);
    }
  };
  return allContext;
}
