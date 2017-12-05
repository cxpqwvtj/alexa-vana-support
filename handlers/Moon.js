const utils = require('../utils')

module.exports = function() {
  const {vanaMoonJp} = utils.vanaTime()
  this.emit(':tell', `現在の月齢は${vanaMoonJp} です。`)
}