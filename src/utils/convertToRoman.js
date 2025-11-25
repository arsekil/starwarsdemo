export function intToRoman(num) {
  const romanMap = [
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
  ]

  let roman = ''
  for (let [value, symbol] of romanMap) {
    while (num >= value) {
      roman += symbol
      num -= value
    }
  }
  return roman
}
