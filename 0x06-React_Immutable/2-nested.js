import { Map } from "immutable";

export default function accessImmutableObject(object, array) {
  return Map(object).getIn(array);
}

// console.log(accessImmutableObject({
//   name: {
//        first: "Guillaume",
//        last: "Salva"
//   }
// }, ['name', 'first']));
