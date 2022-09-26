const input = require("fs").readFileSync("../../stdin", "utf8");
const lines = input.split("\n");

const getSquareOfEvenNumbers = (num) => {
  for (let i = 1; i <= num; i++) {
    const isThisNumberEven = i % 2 === 0;
    if (isThisNumberEven) {
      console.log(`${i}^2 = ${Math.pow(i, 2)}`);
    }
  }
};

const N = Number(lines.shift());

getSquareOfEvenNumbers(N);