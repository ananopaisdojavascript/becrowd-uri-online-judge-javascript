const input = require('fs').readFileSync('../../stdin', 'utf8');
const lines = input.split('\n');

const getSum = (a, b, c) => a + b + c;
const convertStrToNum = (str, a, b) => {
    return Number(str.slice(a, b).replace(/[a-zA-Z ]/g, ''));
}

const N = Number(lines.shift());

for(let i = 0; i < N; i++) {
    const A = convertStrToNum(lines[i], 2, 4);
    const B = convertStrToNum(lines[i], 5, 8);
    const C = convertStrToNum(lines[i], 11);
    const soma = getSum(A, B, C)
    console.log(soma)
}