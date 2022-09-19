const multiplicationTable = function(maxValue){
  let result = 0;
  let final = "";
  for(let i = 1; i <= maxValue; i++){
    for(let j = 1; j <= maxValue; j++){
      result = i * j;
      final = final + result + " ";
    }

    final = final + "\n";
  }
  return final;
  
 };

 console.log(multiplicationTable(1));
 console.log(multiplicationTable(5));
 console.log(multiplicationTable(10));