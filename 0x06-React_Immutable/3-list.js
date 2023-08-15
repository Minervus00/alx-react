import { List } from 'immutable';

export function getListObject(array) {
  return List(array);
}

export function addElementToList(list, element) {
  return list.insert(list.size, element);
}

// console.log(addElementToList(getListObject(['Guillaume', 'Salva', 'Julien']), 'Barbier'));
