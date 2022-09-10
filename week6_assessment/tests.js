const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// ask question one
rl.question("What's up, doc? ", firstAnswer => {
  console.log(firstAnswer + " is up.");

  // only after the user responds to question one, then ask question two
  rl.question("What's down, clown? ", secondAnswer => {
    console.log(secondAnswer + " is down.");
    rl.close();
  });
});