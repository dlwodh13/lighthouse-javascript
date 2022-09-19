  const repeatNumbers = function(data) {
    // Put your solution here
    let repeatNum = [];
    for(let i = 0; i < data.length; i++){
      let ln = data[i][1];
      let num = data[i][0];
      let str = "";
      for(let j = 0; j < ln; j++){
        str += num;
      }
      repeatNum.push(str);
    }
    return repeatNum.join(", ");
  };

  console.log(repeatNumbers([[1, 10]]));
  console.log(repeatNumbers([[1, 2], [2, 3]]));
  console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));