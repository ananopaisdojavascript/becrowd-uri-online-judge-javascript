const input = require('fs').readFileSync('../../stdin', 'utf8');
const lines = input.split('\n');

const getTheGreatestNumber = (a, b, c) => {
    const greatOne = (a + b + (Math.abs(a - b))) / 2;
    const greatTwo = (greatOne + c + (Math.abs(greatOne - c))) / 2;
    return greatTwo;
};

const [A, B, C] = lines[0].split(" ").map(value => Number(value));
const greatestNumber = getTheGreatestNumber(A, B, C);

console.log(`${greatestNumber} eh o maior`);