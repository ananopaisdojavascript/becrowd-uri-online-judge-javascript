const input = require("fs").readFileSync("../../stdin", "utf8");
const lines = input.split("\n");

const getDistance = (x1, x2, y1, y2) => {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};

const [x1, y1] = lines[0].split(" ").map(number => parseFloat(number));
const [x2, y2] = lines[1].split(" ").map(number => parseFloat(number));

console.log(getDistance(x1, x2, y1, y2).toFixed(4));