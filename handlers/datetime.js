const utils = require('../utils')

module.exports = function() {
  const {vanaYear, vanaMonth, vanaDay, vanaHour, vanaMinute, vanaSec, vanaWeek, vanaMoon, vanaWeekJp, vanaMoonJp} = utils.vanaTime()

  const vanaTime = `${vanaYear}年${vanaMonth}月${vanaDay}日 ${vanaHour}時${vanaMinute}分${vanaSec}秒`
  console.log(vanaTime, vanaWeekJp, vanaMoonJp)
  this.emit(':tell', `ヴァナディール時間は${vanaHour}時${vanaMinute}分。 ${vanaWeekJp} 曜日 です。`)
}