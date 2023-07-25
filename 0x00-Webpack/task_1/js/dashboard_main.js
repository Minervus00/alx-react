import $ from "jquery";
const _ = require('lodash');

$('<p>Holberton Dashboard</p>').appendTo('body');
$('<p>Dashboard data for the students</p>').appendTo('body');
$('<button>Click here to get started</button>').appendTo('body');
$("<p id='count'></p>").appendTo('body');
$('<p>Copyright - Holberton School</p>').appendTo('body');

let counted = 0;
function updateCounter() {
  counted++;
  $('#count').html(`${counted} clicks on the button`);
}

$('button').on('click', _.debounce(updateCounter));
