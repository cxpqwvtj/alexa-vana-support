// const moment = require('moment')
const utils = require('../utils')

module.exports = function() {
  const boost = {
    'Morimar': {
      readingName: 'モリマー台地',
      expects: [{ // 00:00 ~ 2:59
        orientation: 'SE から S',
        emotion: '励'
      }, { // 3:00 ~ 5:59
        orientation: 'S から SW',
        emotion: '慌'
      }]
    },
    'Hennetiel': {
      readingName: 'エヌティーエルすいりん'
    },
    'Yorcia': {
      readingName: 'ヨルシア森林'
    },
    'Marjami': {
      readingName: 'マリアミ渓谷'
    },
    'Kamihr': {
      readingName: 'カミール山麓'
    }
  }
  console.log(JSON.stringify(this.event.request))
  if (this.event.request.dialogState !== 'COMPLETED') {
    this.emit(':delegate')
  } else {
    const event = utils.jsToImmutable(this.event)
    const statusCode = event.getIn(['request', 'intent', 'slots', 'area', 'resolutions', 'resolutionsPerAuthority', 0, 'status', 'code'])
    if (statusCode === 'ER_SUCCESS_MATCH') {
      const area = event.getIn(['request', 'intent', 'slots', 'area', 'resolutions', 'resolutionsPerAuthority', 0, 'values', 0, 'value', 'name'])
      const time = utils.vanaTime()
      let index = 0
      if (0 <= time.vanaHour && time.vanaHour < 3) {
        index = 0
      } else if (3 <= time.vanaHour && time.vanaHour < 6) {
        index = 1
      } else if (6 <= time.vanaHour && time.vanaHour < 9) {
        index = 2
      } else if (9 <= time.vanaHour && time.vanaHour < 12) {
        index = 3
      } else if (12 <= time.vanaHour && time.vanaHour < 15) {
        index = 4
      } else if (15 <= time.vanaHour && time.vanaHour < 18) {
        index = 5
      } else if (18 <= time.vanaHour && time.vanaHour < 21) {
        index = 6
      } else if (21 <= time.vanaHour && time.vanaHour < 24) {
        index = 7
      }
      this.emit(':tell', `${boost[area].readingName} の開拓応援、方角は、${boost[area].expects[index].orientation}、感情表現は、${boost[area].expects[index].emotion} です`)
    } else {
      this.emit(':delegate')
    }
  }
}
