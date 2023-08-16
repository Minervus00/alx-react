import { Seq, Map } from 'immutable';

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function printBestStudents(grades) {
  const lazySeq = Seq(Map(grades));
  const bestJS = lazySeq.filter(student => student.score >= 70).toJS();
  Object.keys(bestJS).forEach(key => {
    bestJS[key]['firstName'] = capitalize(bestJS[key]['firstName']);
    bestJS[key]['lastName'] = capitalize(bestJS[key]['lastName']);
  })
  console.log(bestJS);
}
