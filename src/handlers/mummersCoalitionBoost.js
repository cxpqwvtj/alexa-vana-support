// const moment = require('moment')
const utils = require('../utils')

module.exports = function() {
  const boost = {
    'Morimar': {
      readingName: 'モリマー台地',
      expects: [{ // 00:00 ~ 2:59
        orientation: 'SE から S',
        emotion: '励ます'
      }, { // 3:00 ~ 5:59
        orientation: 'S から SW',
        emotion: '慌てる'
      }, { // 6:00 ~ 8:59
        orientation: 'SW から W',
        emotion: '照れる'
      }, { // 9:00 ~ 11:59
        orientation: 'W から NW',
        emotion: '気合を入れる'
      }, { // 12:00 ~ 14:59
        orientation: 'NW から N',
        emotion: '喜ぶ'
      }, { // 15:00 ~ 17:59
        orientation: 'N から NE',
        emotion: '泣く'
      }, { // 18:00 ~ 20:59
        orientation: 'NE から E',
        emotion: '驚く'
      }, { // 21:00 ~ 23:59
        orientation: 'E から SE',
        emotion: '悔しがる'
      }]
    },
    'Hennetiel': {
      readingName: 'エヌティーエルすいりん',
      expects: [{ // 00:00 ~ 2:59
        orientation: 'E から SE',
        emotion: '喜ぶ'
      }, { // 3:00 ~ 5:59
        orientation: 'SE から S',
        emotion: '泣く'
      }, { // 6:00 ~ 8:59
        orientation: 'S から SW',
        emotion: '驚く'
      }, { // 9:00 ~ 11:59
        orientation: 'SW から W',
        emotion: '悔しがる'
      }, { // 12:00 ~ 14:59
        orientation: 'W から NW',
        emotion: '励ます'
      }, { // 15:00 ~ 17:59
        orientation: 'NW から N',
        emotion: '慌てる'
      }, { // 18:00 ~ 20:59
        orientation: 'N から NE',
        emotion: '照れる'
      }, { // 21:00 ~ 23:59
        orientation: 'NE から E',
        emotion: '気合を入れる'
      }]
    },
    'Yorcia': {
      readingName: 'ヨルシア森林',
      expects: [{ // 00:00 ~ 2:59
        orientation: 'S から SW',
        emotion: '照れる'
      }, { // 3:00 ~ 5:59
        orientation: 'SW から W',
        emotion: '気合を入れる'
      }, { // 6:00 ~ 8:59
        orientation: 'W から NW',
        emotion: '喜ぶ'
      }, { // 9:00 ~ 11:59
        orientation: 'NW から N',
        emotion: '泣く'
      }, { // 12:00 ~ 14:59
        orientation: 'N から NE',
        emotion: '驚く'
      }, { // 15:00 ~ 17:59
        orientation: 'NE から E',
        emotion: '悔しがる'
      }, { // 18:00 ~ 20:59
        orientation: 'E から SE',
        emotion: '励ます'
      }, { // 21:00 ~ 23:59
        orientation: 'SE から S',
        emotion: '慌てる'
      }]
    },
    'Marjami': {
      readingName: 'マリアミ渓谷',
      expects: [{ // 00:00 ~ 2:59
        orientation: 'SW から W',
        emotion: '悔しがる'
      }, { // 3:00 ~ 5:59
        orientation: 'W から NW',
        emotion: '励ます'
      }, { // 6:00 ~ 8:59
        orientation: 'NW から N',
        emotion: '慌てる'
      }, { // 9:00 ~ 11:59
        orientation: 'N から NE',
        emotion: '照れる'
      }, { // 12:00 ~ 14:59
        orientation: 'NE から E',
        emotion: '気合を入れる'
      }, { // 15:00 ~ 17:59
        orientation: 'E から SE',
        emotion: '喜ぶ'
      }, { // 18:00 ~ 20:59
        orientation: 'SE から S',
        emotion: '泣く'
      }, { // 21:00 ~ 23:59
        orientation: 'S から SW',
        emotion: '驚く'
      }]
    },
    'Kamihr': {
      readingName: 'カミール山麓',
      expects: [{ // 00:00 ~ 2:59
        orientation: 'W から NW',
        emotion: '励ます'
      }, { // 3:00 ~ 5:59
        orientation: 'NW から N',
        emotion: '慌てる'
      }, { // 6:00 ~ 8:59
        orientation: 'N から NE',
        emotion: '照れる'
      }, { // 9:00 ~ 11:59
        orientation: 'NE から E',
        emotion: '気合を入れる'
      }, { // 12:00 ~ 14:59
        orientation: 'E から SE',
        emotion: '喜ぶ'
      }, { // 15:00 ~ 17:59
        orientation: 'SE から S',
        emotion: '泣く'
      }, { // 18:00 ~ 20:59
        orientation: 'S から SW',
        emotion: '驚く'
      }, { // 21:00 ~ 23:59
        orientation: 'SW から W',
        emotion: '悔しがる'
      }]
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
      this.emit(':ask', `${boost[area].readingName} の開拓応援、方角は、${boost[area].expects[index].orientation}、感情表現は、${boost[area].expects[index].emotion} です`)
    } else {
      this.emit(':elicitSlot', 'area', 'エリアをもう一度教えてください', 'エリアを教えてください', this.event.request.intent)
    }
  }
}
