import { List, Map } from 'immutable';

function concatElements(page1, page2) {
  return List(page1).merge(page2);
}

function mergeElements(page1, page2) {
  const val1 = Object.values(page1);
  const val2 = Object.values(page2);
  if (!Map(page1).equals(Map(page2))) {
    return concatElements(val1, val2);
  } else {
    return List(val2);
  }
}

// console.log(concatElements(['A', 'B'], ['C', 'D']));

// const p1 = {'a': 5, 'b': 4};
// const p2 = {'a': 5, 'b': 4}

// console.log(mergeElements(p1, p2));
