module.exports = function toReadable(number) {
  let readbleNum;

  let ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let secondTen = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen'
  ];

  let tens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety'
  ];

  let strDigits = number.toString().split('');
  let digits = strDigits.map(Number);

  if (number === 0) {
    readbleNum = 'zero';
  } else if (number >= 100) {
    if (digits[1] === 1) {
      readbleNum = `${ones[digits[0]]} hundred ${secondTen[digits[2]]}`;
    } else {
      readbleNum = `${ones[digits[0]]} hundred ${tens[digits[1]]} ${ones[digits[2]]}`;
    }
  } else if (number >= 20) {
    readbleNum = `${tens[digits[0]]} ${ones[digits[1]]}`;
  } else if (number >= 10) {
    readbleNum = `${secondTen[digits[1]]}`;
  } else {
    readbleNum = `${ones[digits[0]]}`;
  }

  return readbleNum.replace(/\s+/g, ' ').trim();
}
