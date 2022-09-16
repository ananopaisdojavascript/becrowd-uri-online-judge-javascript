const input = require('fs').readFileSync('../../stdin', 'utf8');
const lines = input.split('\n');

const sum = (a, b) => a + b;

const [A, B] = lines.map(number => Number(number));

const soma = sum(A, B)

console.log(`X = ${soma}`)