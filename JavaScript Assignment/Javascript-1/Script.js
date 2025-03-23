// let digit = 12345;
// let sum = 0;
// let R =0;
// for(i=1;i<=4;i++){
//     R = digit%10
//     sum += R
//     digit /=10
//     digit = Math.floor(digit)
// }

// let r =10;
// while(digit > 0){
//     r = digit%10
//     sum += r
//     digit /=10
//     digit = Math.floor(digit)
// }
// console.log("Sum :", sum)

// for(i = 1 ; i<=100;i++){
//     if(i % 3 == 0 && i % 5 == 0)
//         console.log(i,": FizzBuzz");
//     else if(i % 5 == 0)
//         console.log(i,":Buzz");
//     else if(i % 3 == 0)
//         console.log(i,":Fizz");
//     else
//         console.log(i);
// }
// let reverse = 0;
// // let R =0;


// for(i=0;i<=4;i++){
//     R = digit%10;
//     reverse = R + (reverse * 10);
        
//         digit /=10;
//         digit = Math.floor(digit)
//         console.log("number: ",reverse);
// }

// for( i=1;i<=4;i++){
//     reversenum = (reverse%)
// }

// console.log("reverse number: ",reverse)
// let n1 = 0;
// let n2 = 0;

// for(i = 1; i < 11; i++)
// {
//     if(i%2 === 0)
//     {
//         n1 += i;
//         console.log("Even ",i)
//     }
//     else{
//         n2 += i;
//         console.log("odd ",i)
//     }
// }

// console.log("Sum of even number: ",n1," Sum of odd number: ",n2);

// for(i = 0 ; i < n ; i++){
    
// }

// <!-- ========== Start  Fibonacci Series Section ========== -->

// let a1 = 0;
// let a2 = 1;

// console.log("Fibonacci Series:")

// for(i = 0 ; i < 10 ; i++)
// {
//     if( i === 0){
//         console.log(a1)
//         console.log(a2)
//         i+=2
//     }
//     if(i%2 === 0){
//         a1 = a1+a2
//         console.log(a1)
//     }
//     else{
//         a2 = a2+a1
//         console.log(a2)
//     }
// }


// <!-- ========== End  Fibonacci Series Section ========== -->

// <!-- ========== Start ArmStrong Number Section ========== -->
// 1634 ,8208, 9474
// let arm_num = 153; 
// let digit_count = 0;
// let sum = 0;

// while(arm_num > 0){
//     arm_num = arm_num/10
//     arm_num = Math.floor(arm_num)
//     digit_count++
// }
// arm_num = 153;
// while(arm_num > 0){
//     r = arm_num%10
//     sum += r**digit_count
//     arm_num = arm_num/10
//     arm_num = Math.floor(arm_num)
// }

// console.log("ArmStrong Number: ",sum)


// <!-- ========== End ArmStrong Number Section ========== -->

// <!-- ========== Start Find the Divisor Section ========== -->

// let num = 25;
// let quotient = 1;
// while(quotient <= ((num/2)- 1)){
//     if(num%quotient === 0){
//         console.log("Divisor: ",quotient)
//     }
//     quotient++
// }



// <!-- ========== End Find the Divisor Section ========== -->


let variable ={}
console.log(typeof variable === 'object');
// typeof variable === 'object';
// variable.type === 'object';
// checkType(variable, 'object');