console.log("Welcome to the exercises solutions!");

 //5. create a array of 5 names Use a for loop to iterate through the array and print
// each name in the browser console

let names = ["Sam","Ken","Michael","Marta","Muhammed"];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

//6. Write a function that takes a string as input and returns the string reversed

 function stringReverser(str) {
     let answer = "";
     for (let letter = str.length - 1; letter >= 0; letter--) {
         answer = answer + str[letter];
     }
     return answer;
 }
console.log(stringReverser("JS is the best!"));