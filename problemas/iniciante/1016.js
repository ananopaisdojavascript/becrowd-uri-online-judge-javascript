const input = require('fs').readFileSync('../../stdin', 'utf8');
const lines = input.split('\n');

const distance = Number(lines.shift());

const getDistance = (60 * distance) / 30;

console.log(`${getDistance} minutos`);