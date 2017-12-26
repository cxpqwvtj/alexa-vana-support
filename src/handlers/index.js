const message = require('../commonMessage')
const netaKnight = require('./neta').netaKnight
const netaGadalar = require('./neta').netaGadalar
const Datetime = require('./datetime')
const Moon = require('./vanaMoon')
const LimitedTimeChallenges = require('./limitedTimeChallenge')
const mummersCoalitionBoost = require('./mummersCoalitionBoost')
const selectCoalition = require('./selectCoalition')

module.exports = {
  'LaunchRequest': function () {
    this.emit(':ask', 'ようこそ。ヴァナサポへ。使い方を知りたい場合は、使い方を教えてと話しかけてください。', message.LINE_CLOSE)
  },
  'AMAZON.HelpIntent': function () {
    this.emit(':ask', '時間を知りたい場合は、時間を教えて。と話しかけてください。', message.LINE_CLOSE)
  },
  'AMAZON.CancelIntent': function () {
    this.emit(':tell', 'キャンセルしました。よい旅を')
  },
  'AMAZON.StopIntent': function () {
    this.emit(':tell', 'ストップしました。よい旅を')
  },
  'tora': function () {
    this.emit(':tell', 'とら', message.LINE_CLOSE)
  },
  'SessionEndedRequest': function() {
    console.log('session ended!')
  },
  'Unhandled': function () {
    this.emit(':tell', 'よくわかりませんでした。勉強しておきます。')
  },
  netaKnight,
  netaGadalar,
  Datetime,
  Moon,
  LimitedTimeChallenges,
  mummersCoalitionBoost,
  selectCoalition
}
