import * as notifData from '../../notifications.json';
import { schema, normalize } from 'normalizr';

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

const user = new schema.Entity('users');
const message = new schema.Entity(
  'messages',
  {},
  {idAttribute: 'guid'}
);

const notification = new schema.Entity('notifications', {
  author: user,
  context: message
});

export const normalizedNotif = normalize(notifData.default, [notification]);
