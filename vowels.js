const numberOfVowels = function(data) {
  // Put your solution here
  let arrayList = Array.from(data);
  let vowelCount = 0;
  for(let i = 0; i < arrayList.length; i++){
    if(arrayList[i] === 'a' || arrayList[i] === 'e' || arrayList[i] === 'i' || arrayList[i] === 'o' || arrayList[i] === 'u'){
      vowelCount++;
    }
  }
  return vowelCount;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
console.log(numberOfVowels("Lee"));