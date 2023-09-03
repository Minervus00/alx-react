import * as notifData from '../../notifications.json';
import { schema, normalize } from 'normalizr';

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

export function getAllNotificationsByUser(userId) {
  const allContext = [];
  const notifs = normalizedNotif.entities.notifications;
  const msgs = normalizedNotif.entities.messages;

  for (const id in notifs) {
    if (notifs[id].author === userId) {
      allContext.push(msgs[notifs[id].context]);
    }
  };
  return allContext;
}

export function notificationsNormalizer(data) {
  return normalize(data, [notification]).entities;
}
