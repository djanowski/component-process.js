var flatten = require('component-resolver').flatten;

/**
 * Although this example is synchronous,
 * the function should always be a yieldable for future support.
 * It should set each bundle as exports[name] = branches.
 * It should either return an array or an object of bundles.
 *
 * @return {Function} exports
 * @api public
 */

module.exports = function* (tree, bundles) {
  /* jshint noyield: true */

  // package everything at once.
  if (!bundles) return flatten(tree);

  var locals = tree.locals;
  var out = {};

  bundles.forEach(function(key) {
    out[key] = flatten(locals[key]);
  });

  return out;
}
