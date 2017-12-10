const moment = require('moment')
const Immutable = require('immutable')

module.exports = {
  vanaTime: () => {
    const weekDays = ['火', '土', '水', '風', '氷', '雷', '光', '闇']
    const moonList = ['二十日月', '二十六夜', '新月', '三日月', '七日月', '上弦の月', '十日月', '十三夜', '満月', '十六夜', '居待月', '下弦の月']

    const vanaTotalPassSec = (moment().unix() + 92514960) * 25
    const vanaWeek = Math.floor( vanaTotalPassSec / (24 * 60 * 60) ) % 8
    const vanaMoon = Math.floor( (vanaTotalPassSec + 24 * 60 * 60 * 2) / (24 * 60 * 60 * 7) ) % 12
    let vanaCalcSec = vanaTotalPassSec
    const vanaYear = Math.floor( vanaCalcSec / (360 * 24 * 60 * 60) )
    vanaCalcSec = vanaCalcSec % (360 * 24 * 60 * 60)
    const vanaMonth = Math.floor( vanaCalcSec / (30 * 24 * 60 * 60) + 1 )
    vanaCalcSec = vanaCalcSec % (30 * 24 * 60 * 60)
    const vanaDay = Math.floor( vanaCalcSec /  (24 * 60 * 60) + 1 )
    vanaCalcSec = vanaCalcSec % (24 * 60 * 60)
    const vanaHour = Math.floor( vanaCalcSec / (60 * 60) )
    vanaCalcSec = vanaCalcSec % (60 * 60)
    const vanaMinute = Math.floor( vanaCalcSec / (60) )
    vanaCalcSec = vanaCalcSec % (60)
    const vanaSec = Math.floor(vanaCalcSec)
    return {
      vanaWeek,
      vanaWeekJp: weekDays[vanaWeek],
      vanaMoon,
      vanaMoonJp: moonList[vanaMoon],
      vanaYear,
      vanaMonth,
      vanaDay,
      vanaHour,
      vanaMinute,
      vanaSec
    }
  },
  jsToImmutable: (obj) => {
    return Immutable.fromJS(obj, function(key, value, path) {
      return Immutable.Iterable.isIndexed(value) ? value.toList() : value.toOrderedMap()
    })
  }
}
