/***********************************************************************
Write a function using fat arrow syntax, `salesTax` that takes in an arbitrary
number of arguments as prices, adds them up and returns a string containing the
sales tax with a dollar sign in front. Use a tax percentage of 9%.

Hint: Look up `toFixed()` on MDN

Examples:

console.log(salesTax(30, 70)); // '$9.00'
console.log(salesTax(1.12, 2.23, 3.34, 4.45)); // '$1.00'
console.log(salesTax(4.99, 9.99, 19.99)); // '$3.15'
***********************************************************************/

// Your code here
let salesTax = (...purchases) => {
  const initialValue = 0;
  const taxRate = .09;
  const totalPurchases = purchases.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);

  totalPurchase = (totalPurchases * taxRate);
  return '$' + totalPurchase.toFixed(2);

}

console.log(salesTax(30, 70)); // '$9.00'
console.log(salesTax(1.12, 2.23, 3.34, 4.45)); // '$1.00'
console.log(salesTax(4.99, 9.99, 19.99)); // '$3.15'

// function financial(x) {
//   return Number.parseFloat(x).toFixed(2);
// }


// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (previousValue, currentValue) => previousValue + currentValue,
//   initialValue
// );



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
// Try catch for assessment purposes only.  Not normal practice.
try {
  module.exports = salesTax;
} catch (e) {
  module.exports = null;
}