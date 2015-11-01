var test = require('prova');
var slugToTitle = require("./");

test('generates a title from slug', function(t){
  t.plan(4);
  t.equal(slugToTitle('hello-world'), 'Hello World');
  t.equal(slugToTitle('hello-'), 'Hello');
  t.equal(slugToTitle('span_eggs'), 'Span Eggs');
  t.equal(slugToTitle('123-foo____bar.qux,corge_hello-world-span;eggs'), '123 Foo Bar. Qux, Corge Hello World Span; Eggs');
});
