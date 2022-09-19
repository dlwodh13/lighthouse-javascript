function howManyHundreds(num){
  let count = 0;
  if(num >= 100){
    for(let i = 100; i <= num; i += 100){
      //adding the number of hundreds in this number
      count++
    }
  }else{
    //if the number is less than 100 count should be 0
    count = 0;
  }
  return count;

}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);