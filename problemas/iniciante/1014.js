const input = require('fs').readFileSync('../../stdin', 'utf8');
const lines = input.split('\n');

const getAverageExpenditure = (a, b) => a / b;

const X = Number(lines[0])
const Y = parseFloat(lines[1])
const averageExpenditure = getAverageExpenditure(X, Y);
console.log(`${averageExpenditure.toFixed(3)} km/l`);