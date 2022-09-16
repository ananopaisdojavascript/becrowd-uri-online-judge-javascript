const input = require('fs').readFileSync('../../stdin', 'utf8');
const lines = input.split('\n');

const salary = (hours, valuePerHour) => hours * valuePerHour;

const [numFunc, totalHours, valuePerHour] = lines.map(num => Number(num));
const sal = salary(totalHours, valuePerHour);

console.log(`NUMBER = ${numFunc}`);
console.log(`SALARY = U$ ${sal.toFixed(2)}`);