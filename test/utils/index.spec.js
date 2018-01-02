const moment = require('moment')

const utils = require('../../src/utils')

test('2005/12/29 00:00:00のヴァナ時間', () => {
  const unixMilliseconds = moment('2005/12/29 00:00:00', 'YYYY/MM/DD HH:mm:ss').utcOffset('+09:00').valueOf()
  Date.now = jest.fn(() => new Date(unixMilliseconds)) // 現在時刻のmock

  const time = utils.vanaTime()
  expect(time.vanaYear).toBe(987)
  expect(time.vanaMonth).toBe(4)
  expect(time.vanaDay).toBe(1)
  expect(time.vanaHour).toBe(0)
  expect(time.vanaMinute).toBe(0)
  expect(time.vanaSec).toBe(0)
  expect(time.vanaWeekJp).toBe('水')
  expect(time.vanaMoonJp).toBe('二十六夜')
  expect(time.nextLightDay.format('YYYY/MM/DD HH:mm')).toBe('2005/12/29 03:50')
})

test('2005/12/25 00:00:01のヴァナ時間', () => {
  const unixMilliseconds = moment('2005/12/25 00:00:01', 'YYYY/MM/DD HH:mm:ss').utcOffset('+09:00').valueOf()
  Date.now = jest.fn(() => new Date(unixMilliseconds)) // 現在時刻のmock

  const time = utils.vanaTime()
  expect(time.vanaYear).toBe(986)
  expect(time.vanaMonth).toBe(12)
  expect(time.vanaDay).toBe(21)
  expect(time.vanaHour).toBe(0)
  expect(time.vanaMinute).toBe(0)
  expect(time.vanaSec).toBe(25)
  expect(time.vanaWeekJp).toBe('光')
  expect(time.vanaMoonJp).toBe('居待月')
  expect(time.nextLightDay.format('YYYY/MM/DD HH:mm')).toBe('2005/12/25 07:40')
})

test('2005/12/26 00:00:00のヴァナ時間', () => {
  const unixMilliseconds = moment('2005/12/26 00:00:00', 'YYYY/MM/DD HH:mm:ss').utcOffset('+09:00').valueOf()
  Date.now = jest.fn(() => new Date(unixMilliseconds)) // 現在時刻のmock

  const time = utils.vanaTime()
  expect(time.vanaYear).toBe(987)
  expect(time.vanaMonth).toBe(1)
  expect(time.vanaDay).toBe(16)
  expect(time.vanaHour).toBe(0)
  expect(time.vanaMinute).toBe(0)
  expect(time.vanaSec).toBe(0)
  expect(time.vanaWeekJp).toBe('闇')
  expect(time.vanaMoonJp).toBe('新月')
  expect(time.nextLightDay.format('YYYY/MM/DD HH:mm')).toBe('2005/12/26 06:43')
})

test('2018/01/02 09:15:00のヴァナ時間', () => {
  const unixMilliseconds = moment('2018/01/02 09:15:00', 'YYYY/MM/DD HH:mm:ss').utcOffset('+09:00').valueOf()
  Date.now = jest.fn(() => new Date(unixMilliseconds)) // 現在時刻のmock

  const time = utils.vanaTime()
  expect(time.vanaYear).toBe(1291)
  expect(time.vanaMonth).toBe(12)
  expect(time.vanaDay).toBe(5)
  expect(time.vanaHour).toBe(15)
  expect(time.vanaMinute).toBe(15)
  expect(time.vanaSec).toBe(0)
  expect(time.vanaWeekJp).toBe('光')
  expect(time.vanaMoonJp).toBe('居待月')
  console.log(time.nextLightDay)
  // expect(time.nextLightDay.format('YYYY/MM/DD HH:mm')).toBe('2005/12/26 06:43')
})
