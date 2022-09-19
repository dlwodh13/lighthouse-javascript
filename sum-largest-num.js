const sumLargestNumbers = function(data){
  // Put your solution here
  let temp;
  for(let i = 0; i < data.length; i++){
    for(let j = i+1; j < data.length; j++){
      if(data[j] < data[i]){
        temp = data[i];
        data[i] =data[j];
        data[j] = temp;
      }
    }
  }
  
  //return sum value of last two elements of the array
  return data[data.length-1] + data[data.length-2];
}


console.log(sumLargestNumbers([1, 10])); // 11
console.log(sumLargestNumbers([1, 2, 3])); // 5
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2])); // 126
console.log(sumLargestNumbers([10, -4, -34, 6, -92, 2])); // 16