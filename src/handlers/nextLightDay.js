const moment = require('moment')

const utils = require('../utils')

module.exports = function() {
  console.log(JSON.stringify(this.event))
  const { nextLightDay } = utils.vanaTime()

  const message = (nextLightDay.isSameOrBefore(moment().endOf('day')))
    ? nextLightDay.format('HH時mm分')
    : nextLightDay.format('DD日HH時mm分')
  
  this.emit(':tell', `次の 光 曜日は、${message} です`)
}