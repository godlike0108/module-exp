import _ from 'lodash'

export default (...args) => {
  return _.concat([1], args)
}