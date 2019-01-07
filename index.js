const _ = require('lodash')

export default (...args) => {
  return _.concat([1], args)
}