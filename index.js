const _ = require('lodash')

module.exports = (...args) => {
  return _.concat([1], args)
}