const lines = prompt("Digite os valores de entrada").split(" ");

console.log(lines)

const raio = parseFloat(lines[0]);
const n = 3.14159;
const area = n * Math.pow(raio, 2)

console.log(`A=${area.toFixed(4)}`);