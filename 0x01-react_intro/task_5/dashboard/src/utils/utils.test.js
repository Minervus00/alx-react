import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

test('getFullYear should return 2023', () => {
  expect(getFullYear()).toBe(2023);
});

test('getFooterCopy should return `Holberton School` if true is passed and `Holberton School main dashboard` otherwise', () => {
  expect(getFooterCopy(true)).toBe('Holberton School');
  expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

test('getLatestNotification should return an element', () => {
  expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
});
