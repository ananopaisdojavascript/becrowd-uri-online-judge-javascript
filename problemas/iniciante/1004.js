const input = require('fs').readFileSync('../../stdin', 'utf8');
const lines = input.split('\n');

const getProduct = (a, b) => a * b;

const [A, B] = lines.map(Number);
const PROD = getProduct(A, B);

console.log(`PROD = ${PROD}`);