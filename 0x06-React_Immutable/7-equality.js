import { is } from 'immutable';

export default function areMapsEqual(page1, page2) {
  return is(page1, page2);
}
