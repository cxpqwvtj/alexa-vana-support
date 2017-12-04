const Alexa = require('alexa-sdk')
const moment = require('moment')
const utils = require('./utils')

exports.handler = function(event, context, callback) {
  console.log(event)
  const alexa = Alexa.handler(event, context)
  alexa.appId = process.env.APP_ID
  alexa.registerHandlers(handlers)
  alexa.execute()
}

const limitedTimeChallenges = [
  ['魔法ダメージで倒す', 'プラントイド類を倒す', 'アモルフ類を倒す', 'ヴァーミン類を倒す', 'アルカナ類を倒す', '経験値を得る'], // 日曜
  ['バード類を倒す', '', '', '', '', ''],
]

const handlers = {
  'LaunchRequest': function () {
    this.emit('AMAZON.HelpIntent')
  },
  'AMAZON.HelpIntent': function () {
    this.emit(':tell', 'ようこそ。ヴァナサポへ。ヴァナ時間を知りたい場合は、ヴァナサポで時間を教えて、と聞いてください。')
  },
  'Datetime': function () {
    const {vanaYear, vanaMonth, vanaDay, vanaHour, vanaMinute, vanaSec, vanaWeek, vanaMoon, vanaWeekJp, vanaMoonJp} = utils.vanaTime()

    const vanaTime = `${vanaYear}年${vanaMonth}月${vanaDay}日 ${vanaHour}時${vanaMinute}分${vanaSec}秒`
    console.log(vanaTime, vanaWeekJp, vanaMoonJp)
    this.emit(':tell', `ヴァナディール時間は${vanaHour}時${vanaMinute}分。 ${vanaWeekJp} 曜日 です。`)
  },
  'tora': function () {
    this.emit(':tell', 'とら')
  },
  'LimitedTimeChallenges': function() {
    const hour = moment().utcOffset('+09:00').diff(moment().utcOffset('+09:00').startOf('day'), 'hour')
    console.log(hour)
    let message = ''
    if (0 <= hour && hour < 4) {
      message = limitedTimeChallenges[moment().weekday()][0]
    } else if (4 <= hour && hour < 8) {
      message = limitedTimeChallenges[moment().weekday()][1]
    } else if (8 <= hour && hour < 12) {
      message = limitedTimeChallenges[moment().weekday()][2]
    } else if (12 <= hour && hour < 16) {
      message = limitedTimeChallenges[moment().weekday()][3]
    } else if (16 <= hour && hour < 20) {
      message = limitedTimeChallenges[moment().weekday()][4]
    } else if (20 <= hour && hour < 24) {
      message = limitedTimeChallenges[moment().weekday()][5]
    }
    this.emit(':tell', `${message} です`)
  },
  'Unhandled': function () {
    this.emit(':tell', 'よくわかりませんでしたが、よい旅を')
  }
}
