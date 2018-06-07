const fp = require('./fp');

console.log(fp.map([1, 2, 3, 4, 5], (x) => (x * 2)));
console.log(fp.filter([1, 2, 3, 4, 5], (x) => (x > 2)));