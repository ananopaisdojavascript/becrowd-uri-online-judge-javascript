// const input = require('fs').readFileSync('../stdin', 'utf8');
// const lines = input.split('\n');

// console.log(input)
// const sum = (a, b, c) => a + b + c;

// const cases = lines.shift();
// console.log(cases)
// console.log(lines)

// for (let i = 0; i < cases; i++) {
//   const strToNum = lines[i].replace(/[a-zA-Z ]/g, '')
//   const num1 = Number(strToNum.slice(0, 2));
//   const num2 = Number(strToNum.slice(2, 5));
//   const num3 = Number(strToNum.slice(5));
//   console.log(num1)
// }


// const sum = (a, b, c) => a + b + c;
// const cases = lines.length;
// console.log(cases)

// for (let i = 0; i < cases; i++) {
//   const strToNum = lines[i].replace(/[a-zA-Z ]/g, '')
//   console.log(strToNum)
// }

const str1 = 'Ab23s249ttux2';
const str2 = 'Abx3s249ttu2x';
const str3 = 'Ab23s23xttu21';

console.log(str1.replace(/[a-zA-Z ]/g, ''))
console.log(str2.replace(/[a-zA-Z ]/g, ''))
console.log(str3.replace(/[a-zA-Z ]/g, ''))