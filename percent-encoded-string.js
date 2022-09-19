const urlEncode = function(text) {
  //Inputting String into Array  
  //.trim() method to remove spaces on the first and last position of the array
  let str = Array.from(text.trim());
  
  //replacing " " element with %20
  for(let i = 0; i < str.length; i++){
    if(str[i] === " "){
      str[i] = "%20";
    }
  }
  //.join allows to covert array into string 
  return str.join("");
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));