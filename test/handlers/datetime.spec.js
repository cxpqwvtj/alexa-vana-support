const moment = require('moment')

const handlers = require('../../src/handlers')

test('datetime20020101', () => {
  const unixMilliseconds = moment('2002/01/01 00:00:00', 'YYYY/MM/DD HH:mm:ss').utcOffset('+09:00').valueOf()
  Date.now = jest.fn(() => new Date(unixMilliseconds)) // 現在時刻のmock

  handlers.emit = (command, message) => {
    expect(message).toBe('ヴァナディール時間は0時0分。 火 曜日 です。')
  }
  handlers.Datetime()
})

test('datetime20030624', () => {
  const unixMilliseconds = moment('2003/06/24 00:00:00', 'YYYY/MM/DD HH:mm:ss').utcOffset('+09:00').valueOf()
  Date.now = jest.fn(() => new Date(unixMilliseconds)) // 現在時刻のmock

  handlers.emit = (command, message) => {
    expect(message).toBe('ヴァナディール時間は0時0分。 風 曜日 です。')
  }
  handlers.Datetime()
})
