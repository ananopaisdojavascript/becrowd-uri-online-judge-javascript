const input = require("fs").readFileSync("../../stdin", "utf8");
const lines = input.split("\n");

const N = Number(lines.shift());

for(let i = 0; i < N; i++) {
    let [A, B] = lines.shift().split(" ").map(Number);
    let arr = [];
    for(let i = A; i <= B; i++) {
        arr.push(i);
    }
    let str1 = arr.join("");
    let str2 = arr.join("").split("").sort((a, b) => a + b).reverse().join("");
    console.log(str1 + str2);
}
