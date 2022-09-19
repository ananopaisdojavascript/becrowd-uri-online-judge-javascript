const input = require("fs").readFileSync("../../stdin", "utf8");
const lines = input.split("\n");

const getSum = (a, b) => a + b;

while(lines.length){
    let [A, B] = lines.shift().split(" ").map(Number);
    if(A === 0 && B === 0) {
        break
    }
    const sum = getSum(A, B)
    console.log(sum.toString().replace(/0/g, ''))
}