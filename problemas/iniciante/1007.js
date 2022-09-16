const input = require('fs').readFileSync('../../stdin', 'utf8');
const lines = input.split('\n');

const difference = (a, b, c, d) => (a * b) - (c * d);

const [A, B, C, D] = lines.map(num => Number(num));
const dif = difference(A, B, C, D);

console.log(`DIFERENCA = ${dif}`);