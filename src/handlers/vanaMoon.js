const message = require('../commonMessage')
const utils = require('../utils')

module.exports = function() {
  const {vanaMoon, vanaMoonJp} = utils.vanaTime()
  // 満月と新月は、釣りの成果が向上します。上弦の月と下弦の月は、釣りの成果が低下します。
  const effect = (() => {
    if (vanaMoon === 2 || vanaMoon === 8) {
      // 満月か新月の時
      return '釣りの成果が向上します。'
    } else if (vanaMoon === 5 || vanaMoon === 11) {
      // 上弦の月か下弦の月の時
      return '釣りの成果が低下します。'
    } else {
      return ''
    }
  })()
  this.emit(':ask', `現在の月齢は${vanaMoonJp} です。${effect}`, message.LINE_CLOSE)
}