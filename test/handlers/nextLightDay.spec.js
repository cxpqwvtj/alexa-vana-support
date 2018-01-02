const moment = require('moment')

const handlers = require('../../src/handlers')

test('2002/01/01 00:00:00の次の光曜日', () => {
  const unixMilliseconds = moment('2002/01/01 00:00:00', 'YYYY/MM/DD HH:mm:ss').utcOffset('+09:00').valueOf()
  Date.now = jest.fn(() => new Date(unixMilliseconds)) // 現在時刻のmock

  handlers.emit = (command, message) => {
    expect(message).toBe('次の 光 曜日は、5時間45分後の、地球時間 05時45分 です')
  }
  handlers.nextLightDay()
})

test('2003/06/24 00:00:00の次の光曜日', () => {
  const unixMilliseconds = moment('2003/06/24 00:00:00', 'YYYY/MM/DD HH:mm:ss').utcOffset('+09:00').valueOf()
  Date.now = jest.fn(() => new Date(unixMilliseconds)) // 現在時刻のmock

  handlers.emit = (command, message) => {
    expect(message).toBe('次の 光 曜日は、2時間52分後の、地球時間 02時52分 です')
  }
  handlers.nextLightDay()
})

test('2003/06/23 23:00:00の次の光曜日', () => {
  const unixMilliseconds = moment('2003/06/23 23:00:00', 'YYYY/MM/DD HH:mm:ss').utcOffset('+09:00').valueOf()
  Date.now = jest.fn(() => new Date(unixMilliseconds)) // 現在時刻のmock

  handlers.emit = (command, message) => {
    expect(message).toBe('次の 光 曜日は、3時間52分後の、地球時間 24日02時52分 です')
  }
  handlers.nextLightDay()
})

test('2018/01/02 09:19:00の次の光曜日', () => {
  const unixMilliseconds = moment('2018/01/02 09:19:00', 'YYYY/MM/DD HH:mm:ss').utcOffset('+09:00').valueOf()
  Date.now = jest.fn(() => new Date(unixMilliseconds)) // 現在時刻のmock

  handlers.emit = (command, message) => {
    expect(message).toBe('次の 光 曜日は、7時間後の、地球時間 16時19分 です')
  }
  handlers.nextLightDay()
})
