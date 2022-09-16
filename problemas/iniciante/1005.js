const input = require('fs').readFileSync('../../stdin', 'utf8');
const lines = input.split('\n');

const mediaPonderada = (a, b) => ((a * 3.5) + (b * 7.5)) / 11;

const [A, B] = lines.map(parseFloat)

const media = mediaPonderada(A, B);

console.log(`MEDIA = ${media.toFixed(5)}`)