const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'] 


function finalPosition(moves){
  const arrLen = moves.length;
  let direction = "";

  //plot points for direction
  let x = 0;
  let y = 0;

  //new cordinate for the position
  let cordinate = [];
  for(let i = 0; i < arrLen; i++){
    direction = moves[i];

    //north add y, south subtract y, west subtract x, east add x
    if(direction === "north"){
      y++;
    }else if(direction === "south"){
      y--;
    }else if(direction === "west"){
      x--;
    }else if(direction === "east"){
      x++;
    }
  }
  //adding two results into array
  cordinate.push(x,y);
  return cordinate;
}

console.log(finalPosition(moves));