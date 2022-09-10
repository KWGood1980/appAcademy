/***********************************************************************
Write a function `morseCode` that takes an array containing a series
of either 'dot' or 'dash' strings. Your function should `console.log`
each string in order, followed by a pause of 100ms after each `dot`
and 300ms after each `dash`.

Note: You must use a recursive approach to solve this problem.

Example:

let code = ['dot', 'dash', 'dot'];

morseCode(code);
// print 'dot'
// pause for 100ms
// print 'dash'
// pause for 300ms
// print 'dot'
// pause for 100ms

***********************************************************************/

function morseCode(code) {
  let delay = 0;
  let element = code[code.lenth - 1];

  code.forEach(element => {

  if (element === 'dot') {
      setTimeout(() => {}, 100)
      console.log('dot');
      delay = 100;
  } else {
    setTimeout(() => {}, 300)
    console.log('dash')
    delay = 300;
  }
  setTimeout(() => {
     return morseCode(code)}, delay)
  })
}

let code = ['dot', 'dash', 'dot'];
morseCode(code);

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = morseCode;
} catch {
  module.exports = null;
}