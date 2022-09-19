const calculateChange = function(total, cash) {
  // Your code here
  let returnedChange = {};
  let change = cash - total;
  //checking amount which is the change = cash given - total price
  console.log(change);

  while(change > 0){
    if(change >= 2000){
      change -= 2000;
      returnedChange.twentyDollars = returnedChange.twentyDollars + 1 || 1;
    }else if(change >= 1000){
      change -= 1000;
      returnedChange.tenDollars = returnedChange.tenDollars + 1 || 1;
    }else if(change >= 500){
      change -= 500;
     returnedChange.fiveDollars = returnedChange.fiveDollars + 1 || 1;
    }else if(change >= 200){
      change -= 200;
      returnedChange.twoDollars = returnedChange.twoDollars + 1 || 1;
    }else if(change >= 100){
      change -= 100;
      returnedChange.oneDollar = returnedChange.oneDollar + 1 || 1;
    }else if(change >= 25){
      change -= 25;
      returnedChange.quarter = returnedChange.quarter + 1 || 1;
    }else if(change >= 10){
      change -= 10;
      returnedChange.dime = returnedChange.dime + 1 || 1;
    }else if(change >= 5){
      change -= 5;
      returnedChange.nickel = returnedChange.nickel + 1 || 1;
    }else if(change >= 1){
      change -= 1;
      returnedChange.penny = returnedChange.penny + 1 || 1;
    }
  }
  return returnedChange;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));