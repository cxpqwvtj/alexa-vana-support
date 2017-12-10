const moment = require('moment')

const handlers = require('../../src/handlers')

test('開拓応援', () => {
  const unixMilliseconds = moment('2017/12/09 18:02:00', 'YYYY/MM/DD HH:mm:ss').utcOffset('+09:00').valueOf()
  Date.now = jest.fn(() => new Date(unixMilliseconds)) // 現在時刻のmock
  handlers.emit = (command, message) => {
    console.log(command, message)
    // expect(message).toMatch(/現在の月齢は十六夜 です。/)
  }
  handlers.event = {
    request: {
      dialogState: 'COMPLETED'
    }
  }
  handlers.mummersCoalitionBoost()
})
