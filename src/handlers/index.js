const Datetime = require('./datetime')
const Moon = require('./Moon')
const LimitedTimeChallenges = require('./LimitedTimeChallenges')

module.exports = {
  'LaunchRequest': function () {
    this.emit('AMAZON.HelpIntent')
  },
  'AMAZON.HelpIntent': function () {
    this.emit(':tell', 'ようこそ。ヴァナサポへ。ヴァナ時間を知りたい場合は、ヴァナサポで時間を教えて、と聞いてください。')
  },
  'tora': function () {
    this.emit(':tell', 'とら')
  },
  'Unhandled': function () {
    this.emit(':tell', 'よくわかりませんでしたが、よい旅を')
  },
  Datetime,
  LimitedTimeChallenges,
  Moon
}
