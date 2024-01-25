// //REGULAR FUNCTION
// function summ(a, b) {
//     return a + b;
// }
// //EXPRESS FUNCTION
// const sum1 = function (z, b) {
//     return z + b;
// }
// // ARROW FU7NCTION
// const sum2 = (a, b,) => {
//     return a + b;
// }

/**
 * 1 Masala
 */
// REGULAR Function
// function firstExample(arg){
//     let res = arg ** 3;
//     return res;
// }
// console.log(firstExample(5));
// // EXPRESS Function
// const firstExpress = function (arg){
//     let res = arg ** 3;
//     return res;
// }
// console.log(firstExpress(5));
// // ARROW Function
// const firstArrow = (arg) => {
//     let res = arg ** 3;
//     return res;
// }
// console.log(firstArrow(5));


/**
 * 2 Masala
 */
// function secondExample(a = 10, b = 9) {
//     let res;
//     if (a > b) {
//         res = a ** 2;
//     } else {
//         res = b ** 2;
//     }
//     return res;
// }
// console.log(secondExample(2, 1));

// Express Function
// const secondExpress = function (a = 1, b = 10) {
//     let res;
//     if (a > b) {
//         res = a ** 2;
//     } else {
//         res = b ** 2;
//     }
//     return res;
// }
// console.log(secondExpress(10, 5));

// Arrow FUnction

// const secondArrow = (a = 10, b = 30) => {
//     let res;
//     if (a > b) {
//         res = a ** 2;
//     } else {
//         res = b ** 2;
//     }
//     return res;
// }
// console.log(secondArrow(10, 5)); 
// 


/**
 * 3 Masala
 */
// function threeR(arg = 943) {
//     let res;
//     let b = arg % 10;
//     let o = Math.trunc((arg /10) % 10);
//     let y = Math.trunc(arg / 100);
//     res = b + o + y;;
//     return res
// }
// console.log(threeR(421));

// EXPRESS Function
// const threeExpress = function(arg = 521) {
//     let res;
//     let b = arg % 10;
//     let o = Math.trunc((arg /10) % 10);
//     let y = Math.trunc(arg / 100);
//     res = b + o + y;;
//     return res
// }
// console.log(threeExpress(473));


// ARROW Function
// const threeArrow = (arg = 143) => {
//     let res;
//     let b = arg % 10;
//     let o = Math.trunc((arg / 10) % 10);
//     let y = Math.trunc(arg /100);
//     res = b + o + y;
//     return res
// }
// console.log(threeArrow(545));

/**
 * 4 Masala
 */
// REGULAR Function
// function fourFunc(num = 10) {
//     let sum = 0
//     for (let i = 1; i <= num; i++) {
//         if (num % i == 0) {
//             sum++
//         }
//     }
//     return sum;
// }
// console.log(fourFunc(10));

// EXPRESS  Function
// const fourExpress = function(num = 10){
//     let sum = 0;
//     for(let i = 1; i <= num; i++){
//         if(num % i == 0){
//             sum++
//         }
//     }
//     return sum
// }
// console.log(fourExpress(18));

//  ARROW Function

// const fourArrow = (num = 93) => {
//     let sum = 0;
//     for(let i = 1; i <= num; i++){
//         if(num % i == 0){
//             sum++
//         }
//     }
//     return sum
// }
// console.log(fourArrow(31));


/**
 * 5 Masala
 */

// REGULAR Function
// function fiveFunc(num = 10) {
//     let sum = 0
//     for (let i = 1; i <= num; i++) {
//         if (i % 2 == 1) {
//             sum++
//         }
//     }
//     return sum;
// }
// console.log(fiveFunc(10));

// EXPRESS  Function
// const fiveExpress = function (num = 10) {
//     let sum = 0
//     for (let i = 1; i <= num; i++) {
//         if (i % 2 == 1) {
//             sum++
//         }
//     }
//     return sum;
// }
// console.log(fiveExpress(18));

//  ARROW Function

// const fiveArrow = (num = 93) => {
//     let sum = 0
//     for (let i = 1; i <= num; i++) {
//         if (i % 2 == 1) {
//             sum++
//         }
//     }
//     return sum;
// }
// console.log(fiveArrow(31));


/**
 * 6 Masala
 */

// function sixFunc(a, b) {
//     let sum = 1;
//     for (let i = a; i <= b; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             sum *= i;
//         }
//     }
//     return sum;
// }
// console.log(sixFunc(1, 30));


// const sixFun = function (a, b) {
//     let sum = 1;
//     for (let i = a; i <= b; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             sum *= i;
//         }
//     }
//     return sum;
// }
// console.log(sixFun(10, 30));

// const sixFuns = (a, b) => {
//     let sum = 1;
//     for (let i = a; i <= b; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             sum *= i;
//         }
//     }
//     return sum;
// }
// console.log(sixFuns(14, 60));

/**
 * 7 Masala
 */
// function myFunc(arg) {
//     let res;
//     let counter = 0;
//     for(let i = 1; i <= arg; i++){
//         if (arg % i == 0) {
//             counter++
//         }
//         if(counter == 2){
//             res = `Tub son`;
//         }else{
//             res = ` tub emas`;
//         }
//     }
//     return res;
// }
// console.log(myFunc(11));

// const myFuncc =  function(arg){
//     let res;
//     let counter = 0;
//     for(let i = 1; i <= arg; i++){
//         if (arg % i == 0) {
//             counter++
//         }
//         if(counter == 2){
//             res = `Tub son`;
//         }else{
//             res = ` tub emas`;
//         }
//     }
//     return res;
// }
// console.log(myFuncc(11));

// const myfunc = (arg) => {
//     let res;
//     let counter = 0;
//     for(let i = 1; i <= arg; i++){
//         if (arg % i == 0) {
//             counter++
//         }
//         if(counter == 2){
//             res = `Tub son`;
//         }else{
//             res = ` tub emas`;
//         }
//     }
//     return res;
// }
// console.log(myfunc(123));

/**
 * 8 Masala
 */

function palin(p) {

    let res = ``
    let b = p % 10;
    let y = Math.trunc(p / 100);

    if (b == y) {
        res = `palindrom son`
    } else {
        res = `Palindrom emas`
    }
    return res;
}
console.log(palin(393));

const mypalin = function (p) {

    let res = ``
    let b = p % 10;
    let y = Math.trunc(p / 100);

    if (b == y) {
        res = `palindrom son`
    } else {
        res = `Palindrom emas`
    }
    return res;
}
console.log(mypalin(312));

const mypali = (p) => {

    let res = ``
    let b = p % 10;
    let y = Math.trunc(p / 100);

    if (b == y) {
        res = `palindrom son`
    } else {
        res = `Palindrom emas`
    }
    return res;
}
console.log(mypali(414));