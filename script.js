 /*function makeChange(amount) {
  const coins = {
    q: 0,
    d: 0,
    n: 0,
    p: 0
  };

  while (amount > 0) {
    if (amount >= 25) {
      coins.q++;
      amount -= 25;
    } else if (amount >= 10) {
      coins.d++;
      amount -= 10;
    } else if (amount >= 5) {
      coins.n++;
      amount -= 5;
    } else {
      coins.p += amount;
      amount = 0;
    }
  }

  return coins;
}

console.log(makeChange(47)); // Output: { "q": 1, "d": 2, "n": 0, "p": 2 }
console.log(makeChange(24)); // Output: { "q": 0, "d": 2, "n": 0, "p": 4 }


// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));*/
const makeChange = © => {
// your name here
// Define the values of coins
const quarterValue = 25;
const dimeValue = 10;
const nickelValue = 5;
const pennyValue = 1;
// Parse the input as an integer
const amount = parseInt(c);

// Calculate the number of quarters
const q = Math.floor(amount / quarterValue);
amount %= quarterValue;

// Calculate the number of dimes
const d = Math.floor(amount / dimeValue);
amount %= dimeValue;

// Calculate the number of nickels
const n = Math.floor(amount / nickelValue);
amount %= nickelValue;

// The remaining amount is in pennies
const p = amount;

// Create and return the result object
const result = {
    q: q,
    d: d,
    n: n,
    p: p
};

return result;

};
// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange©));
