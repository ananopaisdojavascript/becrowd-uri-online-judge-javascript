const input = require("fs").readFileSync("../../stdin", "utf8");
const lines = input.split("\n");

let tag = lines.pop();

while(tag) {
    tag = lines.pop(); 
}
