const camelCase = function(input) {
  // Your code here
  let strs = Array.from(input);
  for(let i = 0; i < strs.length; i++){
    if(strs[i] === " "){
      strs[i+1] = strs[i+1].toUpperCase();
    }
  }
  strs = strs.filter(str => str.trim() !== "");
  return strs.join("");
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));