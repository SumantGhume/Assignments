// //? 1. Function to calculate factorial of a number
// function factorial(n) {
//     if (n === 0 || n === 1) return 1;
//     return n * factorial(n - 1);
// }
// console.log(factorial(5));  

// //? 2. Function to check if a number is even or odd
// function isEvenOrOdd(num) {
//     return num % 2 === 0 ? "Even" : "Odd";
// }
// console.log(isEvenOrOdd(7)); // Odd

// //? 3. Function to reverse a string
// function reverseString(str) {
//     return str.split("").reverse().join("");
// }
// console.log(reverseString("hello")); // "olleh"

// //? 4. Function to find the largest of three numbers
// function largestOfThree(a, b, c) {
//     return Math.max(a, b, c);
// }
// console.log(largestOfThree(3, 7, 5)); // 7

//? 5. Function to calculate the sum of array elements
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
console.log(sumArray([1, 2, 3, 4, 5])); // 15

// //? 6. Function to calculate the area and perimeter of a rectangle
// function rectangleAreaPerimeter(length, width) {
//     return {
//         area: length * width,
//         perimeter: 2 * (length + width)
//     };
// }
// console.log(rectangleAreaPerimeter(5, 10)); // { area: 50, perimeter: 30 }

// //? 7. Function to check if a year is a leap year
// function isLeapYear(year) {
//     return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
// }
// console.log(isLeapYear(2024)); // true

// //? 8. Function to generate multiplication table for a number
// function multiplicationTable(n) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${n} x ${i} = ${n * i}`);
//     }
// }
// multiplicationTable(5);

// //? 9. Function to check if a string is a palindrome
// function isPalindrome(str) {
//     let reversed = str.split("").reverse().join("");
//     return str === reversed;
// }
// console.log(isPalindrome("racecar")); // true

//? 10. Function to find the GCD of two numbers
function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}
console.log(gcd(12, 18)); // 6











