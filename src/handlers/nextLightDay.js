const moment = require('moment')

const utils = require('../utils')

module.exports = function() {
  console.log(JSON.stringify(this.event))
  const { nextLightDay } = utils.vanaTime()

  const message = (nextLightDay.isSameOrBefore(moment().endOf('day')))
    ? nextLightDay.format('HH時mm分')
    : nextLightDay.format('DD日HH時mm分')
  
  const totalDiffMinutes = nextLightDay.diff(moment(), 'minutes')
  const diffHours = totalDiffMinutes > 60 ? `${Math.floor(totalDiffMinutes / 60)}時間` : ''
  const diffMinutes = totalDiffMinutes % 60 === 0 ? '' : `${totalDiffMinutes % 60}分`

  this.emit(':tell', `次の 光 曜日は、${diffHours}${diffMinutes}後の、地球時間 ${message} です`)
}