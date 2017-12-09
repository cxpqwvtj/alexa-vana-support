const moment = require('moment')

const handlers = require('../../src/handlers')

test('moon通常', () => {
  const unixMilliseconds = moment('2017/12/09 18:02:00', 'YYYY/MM/DD HH:mm:ss').utcOffset('+09:00').valueOf()
  Date.now = jest.fn(() => new Date(unixMilliseconds)) // 現在時刻のmock
  handlers.emit = (command, message) => {
    expect(message).toMatch(/現在の月齢は十六夜 です。/)
  }
  handlers.Moon()
})

test('moon新月', () => {
  const unixMilliseconds = moment('2002/01/01 00:00:00', 'YYYY/MM/DD HH:mm:ss').utcOffset('+09:00').valueOf()
  Date.now = jest.fn(() => new Date(unixMilliseconds)) // 現在時刻のmock
  handlers.emit = (command, message) => {
    expect(message).toMatch(/現在の月齢は新月 です。釣りの成果が向上します。/)
  }
  handlers.Moon()
})

test('moon満月', () => {
  const unixMilliseconds = moment('2003/06/24 06:44:00', 'YYYY/MM/DD HH:mm:ss').utcOffset('+09:00').valueOf()
  Date.now = jest.fn(() => new Date(unixMilliseconds)) // 現在時刻のmock
  handlers.emit = (command, message) => {
    expect(message).toMatch(/現在の月齢は満月 です。釣りの成果が向上します。/)
  }
  handlers.Moon()
})

test('moon上弦', () => {
  const unixMilliseconds = moment('2003/06/23 14:24:00', 'YYYY/MM/DD HH:mm:ss').utcOffset('+09:00').valueOf()
  Date.now = jest.fn(() => new Date(unixMilliseconds)) // 現在時刻のmock
  handlers.emit = (command, message) => {
    expect(message).toMatch(/現在の月齢は上弦の月 です。釣りの成果が低下します。/)
  }
  handlers.Moon()
})

test('moon下弦', () => {
  const unixMilliseconds = moment('2003/06/25 02:53:00', 'YYYY/MM/DD HH:mm:ss').utcOffset('+09:00').valueOf()
  Date.now = jest.fn(() => new Date(unixMilliseconds)) // 現在時刻のmock
  handlers.emit = (command, message) => {
    expect(message).toMatch(/現在の月齢は下弦の月 です。釣りの成果が低下します。/)
  }
  handlers.Moon()
})
