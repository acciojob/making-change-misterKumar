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

 const makeChange = (c) => {
  const myMoney = {
    penny: 1,
    nickel: 5,
    dime: 10,
    quarter:25
  };

  let change = {
    q: 0,
    d: 0,
    n: 0,
    p: 0
  };

  
  
  while (c >0) {
    if (c >= myMoney.quarter) {
      change.q++;
      c -= myMoney.quarter;
    } else if (c >= myMoney.dime) {
      change.d++;
      c -= myMoney.dime;
    } else if (c >= myMoney.nickel) {
      change.n++;
      c -= myMoney.nickel;
    } else if (c >= myMoney.penny) {
      change.p++;
      c -= myMoney.penny;
    }
	  else {
		  break;
	  }
  }
  
  return change;
}

// Example: Prompt the user to enter a value for 'c'
const userInput = prompt("Enter c: ");
const result = makeChange(userInput);
alert(JSON.stringify(result));