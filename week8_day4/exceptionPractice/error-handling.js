// 1.
function sum(array) {
  let sum = 0;
  try {
    
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
  }
  catch (error) {
    console.log('poop')
  }
}

let res = sum(null);
console.log(res);

// 2.
// tests
sayName("Alex");
sayName(1);
// Your code here
const sayName = (givenName) => {
  if (typeof givenName !== 'string') {
    consolelog('Invalid name! Must be a string!')
  }
  else {
    console.log(givenName)
  }

}


// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }
  console.log(greeting);
}

try {
  greet(null)
} catch (error) {
  console.log('Hello World')
}
