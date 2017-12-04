module.exports = {
  vanaTime: () => {
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
      vanaMoon,
      vanaYear,
      vanaMonth,
      vanaDay,
      vanaHour,
      vanaMinute,
      vanaSec
    }
  }
}
