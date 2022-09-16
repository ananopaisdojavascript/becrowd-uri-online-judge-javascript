const input = require('fs').readFileSync('../../stdin', 'utf8');
const lines = input.split('\n');

const getSalaryWithBonus = (salary, sales) => {
    return salary + (sales * 0.15);
};

const salary = parseFloat(lines[1]);
const totalSales = parseFloat(lines[2]);
const total = getSalaryWithBonus(salary, totalSales);

console.log(`TOTAL = R$ ${total.toFixed(2)}`);