const instructorWithLongestName = function(instructors) {
  // Put your solution here
  let tempName = instructors[0].name;
  for(let i = 0; i < instructors.length; i++){
    if(tempName.length < instructors[i].name.length){
      tempName = instructors[i];
    }
  }
  return tempName;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));

//name: "Jeremiah", course: "Web"}
//{name: "Domascus", course: "Web"}