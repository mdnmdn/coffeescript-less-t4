

/*
one.js
js1.coffee
js2.coffee
*/
/* one.js  */
var one = 'one.js';
/* js1.coffee  */
(function() {
  alert('ad');
  alert('ad');
}).call(this);

/* js2.coffee  */
(function() {
  alert('js2');
  alert('js2asas');
}).call(this);

