var start = 100;
var end = 200;

for (let i = start; i <= end+1; i++) {
  if ((i % 3 === 0) && (i % 4 === 0)) {
    console.log("LoopyLighthouse");
  } else if (i % 4 === 0) {
    console.log("Lighthouse");
  } else if (i % 3 === 0) {
    console.log("Loopy");
  } else {
    console.log(i);
  }
}

/*
We will be writing a program that prints the numbers from 100 to 200 to the console, with three exceptions:

If the number is a multiple of 3, print the string "Loopy" instead of the number.
If the number is a multiple of 4, print the string "Lighthouse" instead of the number.
If the number is a multiple of both 3 and 4, print the string "LoopyLighthouse" instead of the number.
By print, we are referring to console.log.
*/

