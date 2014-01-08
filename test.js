var slugToTitle = require("./");

it('generates a title from slug', function(){
  expect(slugToTitle('hello-world')).to.equal('Hello World');
  expect(slugToTitle('hello-')).to.equal('Hello');
  expect(slugToTitle('span_eggs')).to.equal('Span Eggs');
  expect(slugToTitle('123-foo____bar.qux,corge_hello-world-span;eggs')).to.equal('123 Foo Bar. Qux, Corge Hello World Span; Eggs');
});
