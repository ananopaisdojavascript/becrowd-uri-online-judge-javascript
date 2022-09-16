const input = require('fs').readFileSync('../../stdin', 'utf8');
const lines = input.split('\n');

const average = (a, b, c) => ((a * 2) + (b * 3) + (c * 5)) / 10

const [A, B, C] = lines.map(num => parseFloat(num));

const media = average(A, B, C)

console.log(`MEDIA = ${media.toFixed(1)}`)