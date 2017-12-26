module.exports = {
  netaKnight: function() {
    this.emit(':tell', 'うは。おけー')
  },
  netaGadalar: function() {
    const message = [
      'スパイク体操',
      'ファ・イ・ガ～ッ！！！！！',
      'サラマンダーフレイム！',
      '炎蛇将（えんじゃしょう）',
      '礼は言わぬぞ。だが、貴様の名は覚えておこう',
      'クズどもめがッ！まとめて灰にしてやるッ！！！',
      'フォオオォォォォオ～ッ！',
      'みなぎるッ。みなぎってきたゾ～ッ！！！',
      '俺サマのサラマンダーフレイムを見て腰を抜かすんじゃねぇぜ',
      '俺サマの火力は凄いぜ'
    ]
    const index = Math.floor((Math.random() * 10) % 10)
    this.emit(':tell', message[index])
  }
}
