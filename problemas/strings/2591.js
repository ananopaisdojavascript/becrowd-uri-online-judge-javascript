const input = require('fs').readFileSync('../../stdin', 'utf8');
const lines = input.split('\n');

const ataque = "haaaaaaaaaamekaaaaaaaaaame";

const countA = ataque.match(/[a]/gi).length;

console.log(countA)