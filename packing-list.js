//array for testing
const packingList = ["bowls","plates","pots","pans","eating utensils","glasses","cups","cooking utensils"];

//for-loop method to literate over an array
console.log("Kitchen stuff to pack:")
for(let i = 0; i < packingList.length; i++){
  console.log(packingList[i]);
}

//while-loop method to literate over an array
console.log("Kitchen stuff to pack:");
let i = 0;
while(i < packingList.length){
  console.log(packingList[i]);
  i++;
}