//? Assignment 1: Arithmetic Operations
// function arithmeticOperations() {
//     let num1 = parseFloat(prompt("Enter the first number:"));
//     let num2 = parseFloat(prompt("Enter the second number:"));
    
//     console.log(`Enter the first number: ${num1}`);
//     console.log(`Enter the second number: ${num2}`);
//     console.log(`Addition: ${num1 + num2}`);
//     console.log(`Subtraction: ${num1 - num2}`);
//     console.log(`Multiplication: ${num1 * num2}`);
//     console.log(`Division: ${Math.floor(num1 / num2)}`);
//     console.log(`Modulus: ${num1 % num2}`);
// }
// comparisonOperators();

//? Assignment 2: Comparison Operators
// function comparisonOperators() {
//     let num1 = parseFloat(prompt("Enter the first number:"));
//     let num2 = parseFloat(prompt("Enter the second number:"));
    
//     console.log(`Enter the first number: ${num1}`);
//     console.log(`Enter the second number: ${num2}`);
//     console.log(`Is first number greater than second? ${num1 > num2}`);
//     console.log(`Is first number less than second? ${num1 < num2}`);
//     console.log(`Are the two numbers equal? ${num1 === num2}`);
// }


// arithmeticOperations();

//? Assignment 3: Logical Operators
// function checkScholarship(mathScore, scienceScore) {
//     let eligible = (mathScore >= 90 && scienceScore >= 85);
//     console.log(`Scholarship Eligibility: ${eligible}`);
// }


// let mathScore = parseInt(prompt("Enter Math score:"));
// let scienceScore = parseInt(prompt("Enter Science score:"));
// checkScholarship(mathScore, scienceScore);


//? Assignment 4: Assignment Operators
// let x = 10;
// console.log(`Initial value of x: ${x}`);

// x += 5;
// console.log(`After adding 5: ${x}`);

// x *= 3;
// console.log(`After multiplying by 3: ${x}`);

// x -= 10;
// console.log(`After subtracting 10: ${x}`);

// x /= 2;
// console.log(`After dividing by 2: ${x}`);

// let modulus = x % 3;
// console.log(`Modulus with 3: ${modulus}`);


//? Assignment 5: Operator Precedence
// let result1 = 10 + 3 * 5;
// let result2 = (10 + 3) * 5;
// let result3 = 20 / 2 * 4;
// let result4 = 20 / (2 * 3);

// console.log(`10 + 3 * 5 = ${result1}`);
// console.log(`(10 + 3) * 5 = ${result2}`);
// console.log(`20 / 2 * 4 = ${result3}`);
// console.log(`20 / (2 * 3) = ${result4}`);


// console.log("Multiplication (*) and division (/) have higher precedence than addition (+) and subtraction (-), so they are evaluated first unless parentheses () are used to change the order.");

//? Assignment 6: Combined Example (Rectangle Calculation)

// function rectangleCalculations() {
//     let length = parseFloat(prompt("Enter length:"));
//     let width = parseFloat(prompt("Enter width:"));

//     let perimeter = 2 * (length + width);
//     let area = length * width;

//     console.log(`Perimeter: ${perimeter}`);
//     console.log(`Area: ${area}`);

//     let isPerimeterGreater = perimeter > area;
//     console.log(`Is perimeter greater than area? ${isPerimeterGreater}`);
// }

// rectangleCalculations();


//? Assignment 7: Complex Logical and Comparison Operations (Voting Eligibility)

// function checkVotingEligibility() {
//     let age = parseInt(prompt("Enter age:"));
//     let isCitizen = prompt("Are you a citizen (true/false)?") === "true";

//     let eligibleToVote = (age >= 18) && isCitizen;
//     console.log(`Eligible to vote: ${eligibleToVote}`);
// }

// checkVotingEligibility();












