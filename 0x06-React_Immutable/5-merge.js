import { List, Map } from 'immutable';

export function concatElements(page1, page2) {
  return List(page1).merge(page2);
}

export function mergeElements(page1, page2) {
  const val1 = Object.values(page1);
  const val2 = Object.values(page2);
  if (!Map(page1).equals(Map(page2))) {
    return concatElements(val1, val2);
  } else {
    return List(val2);
  }
}
