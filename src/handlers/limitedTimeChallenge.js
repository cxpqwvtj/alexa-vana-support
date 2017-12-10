const moment = require('moment')
const message = require('../commonMessage')

const limitedTimeChallenges = [
  ['魔法ダメージで倒す', 'プラントイド類を倒す', 'アモルフ類を倒す', 'ヴァーミン類を倒す', 'アルカナ類を倒す', '経験値をえる'], // 日曜
  ['バード類を倒す', 'リザード類を倒す', 'アンデッド類を倒す', '戦利品(印章)', 'Treasure Casketを開ける', 'アクアン類を倒す'], // 月曜
  ['アモルフ類を倒す', 'ヴァーミン類を倒す', 'アルカナ類を倒す', '経験値をえる', '物理ダメージで倒す', 'ビースト類を倒す'], // 火曜
  ['アンデッド類を倒す', '戦利品(印章)', 'Treasure Casketを開ける', 'アクアン類を倒す', '魔法ダメージで倒す', 'プラントイド類を倒す'], // 水曜
  ['アルカナ類を倒す', '経験値をえる', '物理ダメージで倒す', 'ビースト類を倒す', 'バード類を倒す', 'リザード類を倒す'], // 木曜
  ['Treasure Casketを開ける', 'アクアン類を倒す', '魔法ダメージで倒す', 'プラントイド類を倒す', 'アモルフ類を倒す', 'ヴァーミン類を倒す'], // 金曜
  ['物理ダメージで倒す', 'ビースト類を倒す', 'バード類を倒す', 'リザード類を倒す', 'アンデッド類を倒す', '戦利品(印章)'], // 土曜
]

module.exports = function() {
  const nowChallenge = challengeName(moment().utcOffset('+09:00').startOf('day'), moment().utcOffset('+09:00'))
  const nextChallenge = challengeName(moment().utcOffset('+09:00').add(4, 'hour').startOf('day'), moment().utcOffset('+09:00').add(4, 'hour'))
  this.emit(':ask', `現在の期間限定目標は、${nowChallenge.name} です。次は、${nextChallenge.startHour}時から${nextChallenge.name} です。`, message.LINE_CLOSE)
}

const challengeName = (baseTime, targetTime) => {
  console.log(baseTime, targetTime)
  const hour = targetTime.diff(baseTime, 'hour')
  let timeRangeIndex
  let startHour
  if (0 <= hour && hour < 4) {
    timeRangeIndex = 0
    startHour = 0
  } else if (4 <= hour && hour < 8) {
    timeRangeIndex = 1
    startHour = 4
  } else if (8 <= hour && hour < 12) {
    timeRangeIndex = 2
    startHour = 8
  } else if (12 <= hour && hour < 16) {
    timeRangeIndex = 3
    startHour = 12
  } else if (16 <= hour && hour < 20) {
    timeRangeIndex = 4
    startHour = 16
  } else if (20 <= hour && hour < 24) {
    timeRangeIndex = 5
    startHour = 20
  }
  return {
    name: limitedTimeChallenges[targetTime.weekday()][timeRangeIndex],
    startHour
  }
}
