const input = require('fs').readFileSync('../../stdin', 'utf8');
const lines = input.split('\n');

const getDivisibleNumbers = (num) => {
    for (let i = 0; i <= num; i++) {
        if(num % i === 0) {
            console.log(i)
        }
    }
}

const N = Number(lines.shift());

getDivisibleNumbers(N);