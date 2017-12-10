const moment = require('moment')

const handlers = require('../../src/handlers')

test('開拓応援', () => {
  const unixMilliseconds = moment('2017/12/10 13:28:00', 'YYYY/MM/DD HH:mm:ss').utcOffset('+09:00').valueOf()
  Date.now = jest.fn(() => new Date(unixMilliseconds)) // 現在時刻のmock
  handlers.emit = (command, message) => {
    console.log(command, message)
    expect(message).toMatch(/モリマー台地 の.*/)
  }
  handlers.event = {
    request: {
      dialogState: 'COMPLETED',
      intent: {
        slots: {
          area: {
            resolutions: {
              resolutionsPerAuthority: [{
                status: {
                  code: 'ER_SUCCESS_MATCH'
                },
                values: [{
                  value: {
                    name: 'Morimar'
                  }
                }]
              }]
            }
          }
        }
      }
    }
  }
  handlers.mummersCoalitionBoost()
})
