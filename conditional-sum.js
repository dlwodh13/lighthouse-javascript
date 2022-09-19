const conditionalSum = function(values, condition) {
  // Your code here
  let evenArr = [];
  let oddArr = [];
  let sum = 0;

  for(let i = 0; i < values.length; i++){
    if(values[i]%2 === 0){
      evenArr.push(values[i]);
    }else {
      oddArr.push(values[i]);
    }
  }
  if(condition === "even"){
    for(let j = 0; j < evenArr.length; j++){
      sum += evenArr[j];
    }
    return sum;
  }else if(condition === "odd"){
    for(let k = 0; k < oddArr.length; k++){
      sum += oddArr[k];5
    }
    return sum;
  }
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99, 100, 12, 54, 100], "even"));