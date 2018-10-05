let a = parseInt(prompt("Enter the number"));
let c = Math.floor(a / 10) * 10;
let b = [];

 b[0] = a - Math.floor(a / 10) * 10;
a = Math.floor(a / 10);
b[1] = a - Math.floor(a / 10) * 10;
 a = Math.floor(a / 10);
b[2] = a - Math.floor(a / 10) * 10;
a = Math.floor(a / 10);
b[3] = a;
alert(b);


let a = parseInt(prompt("Enter the number"));
alert(b);
