let num01 = Number(prompt('Enter a number'));
let num02 = Number(prompt('Enter a number'));
let num03 = Number(prompt('Enter a number'));
let num04 = Number(prompt('Enter a number'));
let num05 = Number(prompt('Enter a number'));

let arr = [num01,num02,num03,num04,num05];
let maxNum = Math.max(...arr);
console.log(maxNum, 'is the larger number');