// const moment = require('moment')
const utils = require('../utils')

module.exports = function() {
  console.log(JSON.stringify(this.event.request))
  if (this.event.request.dialogState !== 'COMPLETED') {
    this.emit(':delegate')
  } else {
    const event = utils.jsToImmutable(this.event)
    const statusCode = event.getIn(['request', 'intent', 'slots', 'area', 'resolutions', 'resolutionsPerAuthority', 0, 'status', 'code'])
    if (statusCode === 'ER_SUCCESS_MATCH') {
      const area = event.getIn(['request', 'intent', 'slots', 'area', 'resolutions', 'resolutionsPerAuthority', 0, 'values', 0, 'value', 'name'])
      this.emit(':tell', `${area} の開拓応援は、イントが低すぎてわかりません。勉強しておきます。`)
    } else {
      this.emit(':tell', 'エリアの指定が不正です。')
    }
  }
}
