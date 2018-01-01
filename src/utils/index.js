const moment = require('moment')
const Immutable = require('immutable')

module.exports = {
  vanaTime: () => {
    const weekDays = ['火', '土', '水', '風', '氷', '雷', '光', '闇']
    const moonList = ['二十日月', '二十六夜', '新月', '三日月', '七日月', '上弦の月', '十日月', '十三夜', '満月', '十六夜', '居待月', '下弦の月']

    // ヴァナ時間計算規準日
    const basisDate = moment('2002/06/24 00:00:00', 'YYYY/MM/DD HH:mm:ss').utcOffset('+09:00').toDate()

    // 曜日計算規準日(火曜日始点)
    const basisWeekDay = moment('2002/06/26 00:00:00', 'YYYY/MM/DD HH:mm:ss').utcOffset('+09:00').toDate()

    const msGameDay = (24 * 60 * 60 * 1000 / 25) // milliseconds in a game day
    const msRealDay = (24 * 60 * 60 * 1000) // milliseconds in a real day

    const now = moment().toDate()
    const vanaDate = ((898 * 360 + 30) * msRealDay) + (now.getTime() - basisDate.getTime()) * 25

    // 次の光曜日計算
    const basisLightDay = basisWeekDay.getTime() - (msGameDay * 2)
    const weekCount = Math.floor((now.getTime() - basisLightDay) / (msGameDay * weekDays.length)) + 1
    const nextLightDay = basisLightDay + ((msGameDay * weekDays.length) * weekCount)

    const vYear = Math.floor(vanaDate / (360 * msRealDay))
    const vMon  = Math.floor((vanaDate % (360 * msRealDay)) / (30 * msRealDay)) + 1
    const vDate = Math.floor((vanaDate % (30 * msRealDay)) / (msRealDay)) + 1
    const vHour = Math.floor((vanaDate % (msRealDay)) / (60 * 60 * 1000))
    const vMin  = Math.floor((vanaDate % (60 * 60 * 1000)) / (60 * 1000))
    const vSec  = Math.floor((vanaDate % (60 * 1000)) / 1000)
    const vDay  = Math.floor((vanaDate % (8 * msRealDay)) / (msRealDay))

    const vanaBaseSec = 92514960
    const vanaTotalPassSec = (moment().unix() + vanaBaseSec) * 25
    const vanaMoon = Math.floor( (vanaTotalPassSec + 24 * 60 * 60 * 2) / (24 * 60 * 60 * 7) ) % 12

    return {
      vDay,
      vanaWeekJp: weekDays[vDay],
      vanaMoon,
      vanaMoonJp: moonList[vanaMoon],
      vanaYear: vYear,
      vanaMonth: vMon,
      vanaDay: vDate,
      vanaHour: vHour,
      vanaMinute: vMin,
      vanaSec: vSec,
      nextLightDay: moment(nextLightDay).utcOffset('+09:00')
    }
  },
  jsToImmutable: (obj) => {
    return Immutable.fromJS(obj, function(key, value, path) {
      return Immutable.Iterable.isIndexed(value) ? value.toList() : value.toOrderedMap()
    })
  }
}
