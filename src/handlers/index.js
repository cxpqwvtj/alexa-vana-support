const message = require('../commonMessage')
const netaKnight = require('./neta').netaKnight
const netaGadalar = require('./neta').netaGadalar
const Datetime = require('./datetime')
const Moon = require('./vanaMoon')
const LimitedTimeChallenges = require('./limitedTimeChallenge')
const mummersCoalitionBoost = require('./mummersCoalitionBoost')

module.exports = {
  'LaunchRequest': function () {
    this.emit(':ask', 'ようこそ。ヴァナサポへ', message.LINE_CLOSE)
  },
  'AMAZON.HelpIntent': function () {
    this.emit(':ask', '時間を知りたい場合は、時間を教えて。と聞いてください。', message.LINE_CLOSE)
  },
  'tora': function () {
    this.emit(':ask', 'とら', message.LINE_CLOSE)
  },
  'Unhandled': function () {
    this.emit(':tell', 'よくわかりませんでした。勉強してきます。')
  },
  netaKnight,
  netaGadalar,
  Datetime,
  Moon,
  LimitedTimeChallenges,
  mummersCoalitionBoost
}
