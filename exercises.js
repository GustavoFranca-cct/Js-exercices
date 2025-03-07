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

//7. Create a function that checks whether a given word or phrase is a palindrome. A
// palindrome is a word or phrase that reads the same backwards as forwards

function isPalindrome(str) {
    let reversed = stringReverser(str);
    return str === reversed;
}
console.log(isPalindrome("arara"));

//8. Write a program that prints the numbers from 1 to 100. For multiples of 3, print "Fizz"
// instead of the number, and for the multiples of 5, print "Buzz." For numbers which are
// multiples of both 3 and 5, print "FizzBuzz."
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }


    }