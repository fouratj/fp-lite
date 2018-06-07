module.exports = (arr, cb) => {
  return arr.reduce((pre, curr) => [...pre, cb(curr)], []);
}
