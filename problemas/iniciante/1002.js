const input = require('fs').readFileSync('../../stdin', 'utf8');
const lines = input.split('\n');

const raio = parseFloat(lines[0]);
const n = 3.14159;
const area = n * Math.pow(raio, 2)

console.log(`A=${area.toFixed(4)}`);