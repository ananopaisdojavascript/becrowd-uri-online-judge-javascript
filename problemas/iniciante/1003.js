const input = require('fs').readFileSync('../../stdin', 'utf8');
const lines = input.split('\n');

const getSum = (a, b) => a + b;

const [A, B] = lines.map(Number);
const SOMA = getSum(A, B);

console.log(`SOMA = ${SOMA}`);