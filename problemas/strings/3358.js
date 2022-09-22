const input = require('fs').readFileSync('../../stdin', 'utf8');
const lines = input.split('\n');

const getDifficultLastName = (lastName) => {
    const lastNameRegEx = /([^aeiou]{3,})/i;
    return lastNameRegEx.test(lastName) ? `${lastName} nao eh facil` : `${lastName} eh facil`;
};

const N = Number(lines.shift());

for (let index = 0; index < N; index++) {
    console.log(getDifficultLastName(lines[index]));
}