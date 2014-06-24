var toTitleCase = require("to-title");
var trim = require("trim");

module.exports = slugToTitle;

function slugToTitle (slug) {
  return trim(toTitleCase(slug.replace(/[-_]+/g, ' ').replace(/([\.,;])/g, '$1 ')));
}
