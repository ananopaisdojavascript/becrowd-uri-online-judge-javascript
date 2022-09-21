const input = require('fs').readFileSync('../../stdin', 'utf8');
const lines = input.split('\n');

const getRectangleTriangleArea = (a, b) => (a * b) / 2;
const getCircleArea = (a) => 3.14159 * Math.pow(a, 2);
const getTrapezeArea = (a, b, c) => ((a + b) / 2) * c;
const getSquareArea = (a) => Math.pow(a, 2);
const getRectangleArea = (a, b) => (a * b);

const [A, B, C] = lines[0].split(" ").map(parseFloat);

const rectangleTriangleArea = getRectangleTriangleArea(A, C);
const circleArea = getCircleArea(C);
const trapezeArea = getTrapezeArea(A, B, C);
const squareArea = getSquareArea(B);
const rectangleArea = getRectangleArea(A, B);

console.log(`TRIANGULO: ${rectangleTriangleArea.toFixed(3)}`);
console.log(`CIRCULO: ${circleArea.toFixed(3)}`);
console.log(`TRAPEZIO: ${trapezeArea.toFixed(3)}`);
console.log(`QUADRADO: ${squareArea.toFixed(3)}`);
console.log(`RETANGULO: ${rectangleArea.toFixed(3)}`);