let a = parseInt(prompt("Enter the number"));
let c = (a / 10) * 10;
 b[0] = a - c;
let a = a / 10;
b[1] = a - c;
let a = a / 10;
b[2] = a - c;
let a = a / 10;
b[3] = a;
alert(b [0, 1, 2, 3]);


// function fibonacciNumber(n) {
//     let fibonacciNumbers = [0, 1, 1];
//     let i = 3;
//     while (i <= n) {
//         fibonacciNumbers[i] = fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2];
//         i++;
//     };
//     return fibonacciNumbers[n];

// }