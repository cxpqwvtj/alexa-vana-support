const utils = require('../utils')

module.exports = function() {
  const {vanaMoonJp} = utils.vanaTime()
  this.emit(':tell', `現在の月齢は${vanaMoonJp} です。満月と新月は、釣りの成果が向上します。上弦の月と下弦の月は、釣りの成果が低下します。`)
}