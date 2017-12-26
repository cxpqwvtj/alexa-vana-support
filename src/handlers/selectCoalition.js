const utils = require('../utils')
const COALITION_NAME = require('../commonMessage').COALITION_NAME

module.exports = function() {

  console.log(JSON.stringify(this.event.request))
  if (this.event.request.dialogState !== 'COMPLETED') {
    this.emit(':delegate')
  } else {
    const event = utils.jsToImmutable(this.event)
    const statusCode = event.getIn(['request', 'intent', 'slots', 'coalition', 'resolutions', 'resolutionsPerAuthority', 0, 'status', 'code'])
    if (statusCode === 'ER_SUCCESS_MATCH') {
      const coalition = event.getIn(['request', 'intent', 'slots', 'coalition', 'resolutions', 'resolutionsPerAuthority', 0, 'values', 0, 'value', 'name'])
      this.emit(':ask', `${COALITION_NAME[coalition]}ワークスですね。今はわからないので勉強しておきます。他のワークスを調べますか？`)
    } else {
      this.emit(':elicitSlot', 'coalition', 'ワークス名をもう一度教えてください', 'ワークス名を教えてください', this.event.request.intent)
    }
  }
}
