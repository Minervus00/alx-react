import { Seq } from 'immutable';

export default function printBestStudents(grades) {
  const lazySeq = Seq(grades);
  const bestJS = lazySeq.filter(student => student.score >= 70).toJS();
  
  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  Object.keys(bestJS).forEach(key => {
    bestJS[key]['firstName'] = capitalize(bestJS[key]['firstName']);
    bestJS[key]['lastName'] = capitalize(bestJS[key]['lastName']);
  })

  console.log(bestJS);
}
