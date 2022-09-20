const input = require('fs').readFileSync('../../stdin', 'utf8');
const lines = input.split('\n');

const [codigoPeca1, quantPeca1, precoPeca1] = lines[0].split(" ").map(num => Number(num));
const [codigoPeca2, quantPeca2, precoPeca2] = lines[1].split(" ").map(num => Number(num));

const valorTotal = (quantPeca1 * precoPeca1) + (quantPeca2 * precoPeca2);

console.log(`VALOR A PAGAR: R$ ${valorTotal.toFixed(2)}`);