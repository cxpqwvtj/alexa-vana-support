const Datetime = require('./datetime')
const Moon = require('./vanaMoon')
const LimitedTimeChallenges = require('./limitedTimeChallenge')
const mummersCoalitionBoost = require('./mummersCoalitionBoost')

module.exports = {
  'LaunchRequest': function () {
    this.emit('AMAZON.HelpIntent')
  },
  'AMAZON.HelpIntent': function () {
    this.emit(':ask', 'ようこそ。ヴァナサポへ')
  },
  'tora': function () {
    this.emit(':ask', 'とら')
  },
  'Unhandled': function () {
    this.emit(':tell', 'イント不足でわかりません。勉強しておきます。')
  },
  Datetime,
  Moon,
  LimitedTimeChallenges,
  mummersCoalitionBoost
}
