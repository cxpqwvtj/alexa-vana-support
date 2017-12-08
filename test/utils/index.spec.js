const moment = require('moment')
const utils = require('../../src/utils')

test('vanaTime', () => {
  const unixMilliseconds = moment('2002/01/01 00:00:00', 'YYYY/MM/DD HH:mm:ss').utcOffset('+09:00').valueOf()
  Date.now = jest.fn(() => new Date(unixMilliseconds)) // 現在時刻のmock

  const time = utils.vanaTime()
  expect(time.vanaYear).toBe(886)
  expect(time.vanaMonth).toBe(1)
  expect(time.vanaDay).toBe(1)
  expect(time.vanaHour).toBe(0)
  expect(time.vanaMinute).toBe(0)
  expect(time.vanaSec).toBe(0)
})
