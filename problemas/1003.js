const lines = prompt("Digite os valores de entrada").split(" ");

console.log(lines)

const [A, B] = lines.map(Number)
const SOMA = A + B

console.log(`SOMA = ${SOMA}`)