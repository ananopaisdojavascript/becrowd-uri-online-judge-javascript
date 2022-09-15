const lines = prompt("Digite os valores de entrada").split("\n");
console.log(lines)

// const sum = (a, b, c) => a + b + c;
const cases = lines.length;
console.log(cases)

for (let i = 0; i < cases; i++) {
  const strToNum = lines[i].replace(/[a-zA-Z ]/g, '')
  console.log(strToNum)
}
