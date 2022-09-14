const lines = prompt("Digite os valores de entrada").split(" ");

const [A, B] = lines.map(Number)
const PROD = A * B;

console.log(`PROD = ${PROD}`)