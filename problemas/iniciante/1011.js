const input = require('fs').readFileSync('../../stdin', 'utf8');
const lines = input.split('\n');

const getVolume = (piNum, ray) => (4/3) * piNum * (Math.pow(ray, 3));

const ray = parseFloat(lines.shift())
const pi = 3.14159;
const volume = getVolume(pi, ray);

console.log(`VOLUME = ${volume.toFixed(3)}`);